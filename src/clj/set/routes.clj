(ns set.routes
  (:require [set.config :as config]
            [c3kit.apron.corec :as ccc]
            [c3kit.apron.util :as util]
            [c3kit.wire.ajax :as ajax]
            [clojure.string :as str]
            [compojure.core :as compojure :refer [defroutes routes]]
            [ring.util.response :as response]))

(defn wrap-prefix [handler prefix not-found-handler]
  (fn [request]
    (let [path (or (:path-info request) (:uri request))]
      (when (str/starts-with? path prefix)
        (let [request (assoc request :path-info (subs path (count prefix)))]
          (if-let [response (handler request)]
            response
            (not-found-handler request)))))))

(def resolve-handler
  (if config/development?
    (fn [handler-sym] (util/resolve-var handler-sym))
    (memoize (fn [handler-sym] (util/resolve-var handler-sym)))))

(defn lazy-handle
  "Reduces load burden of this ns, which is useful in development.
  Runtime errors will occur for missing handlers, but all the routes should be tested in routes_spec.
  Assumes all handlers take one parameter, request."
  [handler-sym request]
  (let [handler (resolve-handler handler-sym)]
    (handler request)))

(defmacro lazy-routes
  "Creates compojure route for each entry where the handler is lazily loaded.
  Why are params a hash-map instead of & args? -> Intellij nicely formats hash-maps as tables :-)"
  [table]
  `(routes
     ~@(for [[[path method] handler-sym] table]
         (let [method (if (= :any method) nil method)]
           (compojure/compile-route method path 'req `((lazy-handle '~handler-sym ~'req)))))))

(defn redirect-handler [path]
  (let [segments (str/split path #"/")
        segments (map #(if (str/starts-with? % ":") (keyword (subs % 1)) %) segments)]
    (fn [request]
      (let [params   (:params request)
            segments (map #(if (keyword? %) (get params %) %) segments)
            dest     (str/join "/" segments)]
        (response/redirect dest)))))

(defmacro redirect-routes [table]
  `(routes
     ~@(for [[[path method] dest] table]
         (let [method (if (= :any method) nil method)]
           (compojure/compile-route method path 'req `((redirect-handler ~dest)))))))

(def ws-handlers
  {
   :ws/close            'set.room/ws-leave-room
   :room/create         'set.room/ws-create-room
   :room/join           'set.room/ws-join-room
   :room/fetch          'set.room/ws-fetch-room
   :game/start          'set.game/ws-start-game
   :game/submit-cards   'set.game/ws-submit-cards
   })

(defn sleep-for-10 [] (Thread/sleep 10000))
(defn spinner [_]
  (sleep-for-10)
  (ajax/ok {} nil))

(def ajax-routes-handler
  (-> (lazy-routes
        {
         ;["/forgot-password" :post]  set.auth/ajax-forgot-password
         ;["/recover-password" :post] set.auth/ajax-recover-password
         ["/spinner" :get]    set.routes/spinner
         ["/csrf-token" :get] set.auth/ajax-csrf-token
         ;["/user/csrf-token" :get]   set.auth/ajax-csrf-token
         ;["/user/signin" :post]      set.auth/ajax-login
         })
    (wrap-prefix "/api" ajax/api-not-found-handler)
    ajax/wrap-ajax))

(def web-routes-handlers
  (lazy-routes
    {
     ["/" :get]               set.layouts/web-rich-client
     ["/singleplayer" :get]               set.layouts/web-rich-client
     ["/room/:code" :get]     set.layouts/web-rich-client
     ;["/error" :any]                            set.errors/web-error
     ;["/forgot-password" :get]                  set.layouts/web-rich-client
     ;["/recover-password/:recovery-token" :get] set.layouts/web-rich-client
     ;["/signout" :any]                          set.auth/web-signout
     ;["/signout/:reason" :any]                  set.auth/web-signout
     ["/user/websocket" :any] set.auth/websocket-open
     }))

(def dev-handler
  (lazy-routes
    {
     ;["/sandbox" :get]                 set.sandbox.core/index
     ;["/sandbox/" :get]                set.sandbox.core/index
     ;["/sandbox/:page" :get]           set.sandbox.core/handler
     ;["/sandbox/:page/:ns" :get]       set.sandbox.core/handler
     ;["/sandbox/:page/:ns1/:ns2" :get] set.sandbox.core/handler
     }))

(defroutes handler
           ajax-routes-handler
           web-routes-handlers
           (if config/production? ccc/noop dev-handler)
           )