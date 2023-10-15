(ns set.core
  (:require [goog.dom :as gdom]
            [reagent.dom :as rd]
            [set.cards :as cards]))

(defn component []
  [:div.center
   [cards/buttons]
   [cards/stats]])

(defn ^:export main []
  (rd/render [component] (.getElementById js/document "app")))

(main)