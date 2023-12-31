(ns set.homepage
  (:require [set.cards :as cards]
            [set.color-blind :as colorblind]
            [set.page :as page]
            [set.settings :as settings]
            [set.stats :as stats]))

(defmethod page/render :homepage [_]
  [:div.main-container
   [:div.left-container
    [stats/stats]]
   [:div.center
    [cards/buttons settings/state]]
   [:div
    [colorblind/button]]])