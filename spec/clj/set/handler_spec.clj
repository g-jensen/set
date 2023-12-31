(ns set.handler-spec
  (:require [c3kit.wire.websocket :as ws]
            [hiccup.page :as page]
            [set.handler :as handler]
            [speclj.core :refer :all]
            [set.handler :as sut]
            [speclj.stub :as stub]
            [c3kit.wire.spec-helper :as wire-helper]))

(def args (atom :none))

(def empty-client-init
  (page/html5
    sut/skeleton
    [:script {:type "text/javascript"}
     "set.core.main(\"[\\\"^ \\\"]\");"]))

(def populated-client-init
  (page/html5
    sut/skeleton
    [:script {:type "text/javascript"}
     "set.core.main(\"[\\\"^ \\\",\\\"~:a\\\",\\\"1\\\"]\");"]))

(defmacro check-route [path method handler]
  `(let [stub-key# ~(keyword handler)]
     (require '~(symbol (namespace handler)))
     (with-redefs [~handler (stub stub-key#)]
       (handler/web-handler {:uri ~path :request-method ~method})
       (should-have-invoked stub-key#)
       (reset! args (stub/first-invocation-of stub-key#)))))

(defmacro test-route [path method handler & body]
  `(it ~path
     (check-route ~path ~method ~handler)
     ~@body))

(defmacro test-redirect [path method dest]
  `(it (str ~path " -> " ~dest)
     (let [response# (handler/web-handler {:uri ~path :request-method ~method})]
       (wire-helper/should-redirect-to response# ~dest))))

(defmacro test-webs [id sym]
  `(it (str "remote " ~id " -> " '~sym)
     (let [action# (ws/resolve-handler ~id)]
       (should-not= nil action#)
       (should= '~sym (.toSymbol action#)))))

(describe "Handler"
  (with-stubs)
  (before (reset! args :none))

  (it "initializes client with data"
    (should= empty-client-init (sut/client-init {}))
    (should= populated-client-init (sut/client-init {:a "1"})))

  (test-route "/" :get set.handler/client-init)
  (test-route "/room/:link" :get set.handler/client-init))