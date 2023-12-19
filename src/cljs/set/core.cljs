(ns set.core
  (:require [goog.dom :as gdom]
            [reagent.dom :as rd]
            [set.cards :as cards]
            [set.color-blind :as cb]))

(defn component []
  [:div.center
   [cards/buttons]
   [cards/stats]
   ;TODO - set up settings buttons with multimethods so can just call one fn
   [cb/button]])

(defn ^:export main []
  (rd/render [component] (.getElementById js/document "app")))

(main)