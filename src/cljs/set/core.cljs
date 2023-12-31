(ns set.core
  (:require [c3kit.apron.utilc :as utilc]
            [goog.dom :as gdom]
            [reagent.dom :as rd]
            [set.cards :as cards]
            [set.stats :as stats]
            [set.color-blind :as colorblind]
            [set.settings :as settings]))

(defn component []
  [:div.main-container
   [:div.left-container
    [stats/stats]]
   [:div.center
    [cards/buttons settings/state]]
   [:div
    [colorblind/button]]])

(defn ^:export main [data]
  (prn (utilc/<-transit data))
  (rd/render [component] (.getElementById js/document "app")))

;(main)