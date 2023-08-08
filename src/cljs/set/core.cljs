(ns set.core
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

;; Form-3 Component
(defn foo []
  (r/create-class {:reagent-render (fn [] [:div "Hello, world!"])}))

;; Form-1 Component
(defn bar []
  [:div "Hello, world!"])

;; Form-2 Component
(defn baz []
  (fn []
    [:div "Hello, world!"]))

(defn home []
  [:div
   [foo]
   [bar]
   [baz]
   [:img {:src "resources/cards/green-one-diamond-open.png"}]])

(defn ^:export main []
  (rd/render [home] (.getElementById js/document "app")))

(main)