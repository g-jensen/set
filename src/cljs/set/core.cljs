(ns set.core
  (:require [goog.dom :as gdom]
            [reagent.dom :as rd]
            [set.components :as components]))

(defn ^:export main []
  (rd/render [components/main] (.getElementById js/document "app")))

(main)