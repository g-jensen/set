(ns set.homepage
  (:require [set.cards :as cards]
            [set.color-blind :as colorblind]
            [set.page :as page]
            [set.settings :as settings]
            [set.stats :as stats]))

(defmethod page/render :home [_]
  [:div.main-container
   [:div.left-container
    [:br]
    [stats/stats]
    [:br]
    [:div
     [:p.no-margin "Join Multiplayer Game:"]
     [:input.code-input {:type "text" :placeholder "room code"}]
     [:input {:type "button" :value "Join"}]]
    [:br]
    [:div
     [:input {:type "button" :value "Create Multiplayer Game"}]]]
   [:div.center
    [cards/buttons settings/state]]
   [:div
    [:br]
    [colorblind/button]]])