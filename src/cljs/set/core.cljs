(ns set.core
  (:require [goog.dom :as gdom]
            [reagent.dom :as rd]
            [set.cards :as cards]))

(defn ^:export main []
  (rd/render [cards/buttons] (.getElementById js/document "app")))

(main)