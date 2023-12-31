(ns set.page
  (:require [reagent.core :as reagent]
            [c3kit.apron.log :as log]))

(def state (reagent/atom {}))

(defn cursor [path value]
  (let [c (reagent/cursor state path)]
    (reset! c value)
    c))

(def page (cursor [:page] nil))
(def room (cursor [:room] {}))

(defn clear! [] (reset! state {}))

(defn install-page! [page] (swap! state assoc :page page))

(defmulti render identity)
(defmulti entering! identity)
(defmulti leaving! identity)
(defmulti reconnected! identity)

(defn install-room [link]
  (swap! state assoc :room link))

(defmethod render :default [page]
  (log/error "DEFAULT render-page!")
  [:h1 "DEFAULT render-page"])

(defmethod entering! :default [page])
(defmethod leaving! :default [page])
(defmethod reconnected! :default [page])