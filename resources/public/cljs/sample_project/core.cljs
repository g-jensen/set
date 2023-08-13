(ns sample-project.core
  (:require [goog.dom :as gdom]
            [reagent.core :as reagent]
            [reagent.dom :as rdom]
            [sample-project.components :as components]))

(defonce state (reagent/atom {}))

(defn ^:export main []
  (println "Hello, from main!")
  (rdom/render [components/hello-world] (js/document.getElementById "app")))

(main)