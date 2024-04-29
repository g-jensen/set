(ns set.singleplayer
  (:require [c3kit.bucket.api :as db]
            [set.cardsc :as cardsc]
            [set.gamec :as gamec]
            [set.page :as page]
            [set.game :as game]
            [set.state :as state]))

(defmethod page/entering! :singleplayer [_]
  (db/tx (gamec/->game (shuffle cardsc/deck))))

(defmethod page/exiting! :singleplayer [_])

(defmethod page/render :singleplayer [_]
  [:div.main-container
   [:div.left-container]
   [:div.center
    [game/card-buttons state/game game/state]]
   [:div
    [game/colorblind-button game/state]]])