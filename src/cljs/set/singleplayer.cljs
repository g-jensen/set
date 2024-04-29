(ns set.singleplayer
  (:require [c3kit.bucket.api :as db]
            [set.cardsc :as cardsc]
            [set.gamec :as gamec]
            [set.page :as page]
            [set.game :as game]
            [set.state :as state]))

(defmethod page/entering! :singleplayer [_]
  (mapv #(db/delete %) (db/find :game))
  (swap! game/state assoc :mode :singleplayer)
  (db/tx (gamec/->game (shuffle cardsc/deck))))

(defmethod page/exiting! :singleplayer [_])

(defn singleplayer [game-ratom state-ratom]
  [:div.main-container
   [:div.left-container]
   [:div.center
    [game/card-buttons game-ratom state-ratom]]
   [:div
    [game/colorblind-button state-ratom]]])

(defmethod page/render :singleplayer [_]
  [singleplayer state/game game/state])