(ns set.handler
  (:require [c3kit.apron.utilc :as utilc]
            [compojure.route :as route]
            [hiccup.page :as page]
            [compojure.core :refer [defroutes GET]]))

(def skeleton
  [:head
   [:meta {:charset "UTF-8"}]
   [:title "Title"]
   [:link {:rel "stylesheet" :href "/styles.css"}]
   [:body
    [:div#app]
    [:script {:src "/cljs/c3kit_scaffold.js" :type "text/javascript"}]]])

(defn client-init
  ([] (client-init {}))
  ([data]
  (let [payload (pr-str (utilc/->transit data))]
    (page/html5
      skeleton
      [:script {:type "text/javascript"}
       (str "set.core.main(" payload ");")]))))

(defroutes web-handler
           (GET "/" [] (client-init))
           (GET "/room/:link" [link] (client-init))
           (route/files "/" {:root "resources/public/"})
           (route/not-found "not found"))