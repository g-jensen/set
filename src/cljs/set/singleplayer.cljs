(ns set.singleplayer
  (:require [c3kit.bucket.api :as db]
            [set.cardsc :as cardsc]
            [set.gamec :as gamec]
            [set.page :as page]
            [set.cards :as cards]
            [set.state :as state]))

(defmethod page/entering! :singleplayer [_]
  (db/tx (gamec/->game (shuffle cardsc/deck))))

(defmethod page/exiting! :singleplayer [_])

(defmethod page/render :singleplayer [_]
  [:div.main-container
   [:div.left-container]
   [:div.center
    [cards/card-buttons state/game cards/state]]
   [:div
    [cards/colorblind-button cards/state]]])