(ns set.singleplayer
  (:require [c3kit.bucket.api :as db]
            [reagent.core :as reagent]
            [set.cardsc :as cardsc]
            [set.gamec :as gamec]
            [set.how-to-play :as htp]
            [set.page :as page]
            [set.game :as game]
            [set.state :as state]))

(def display-how-to-play? (reagent/atom true))

(defn stats [game-ratom state-ratom]
  [:div
   [:h1.no-margin {:id "-found"} (str "Found: " (:found-sets-count @state-ratom))]
   [:p.no-margin {:id "-exist"} (str "Exist: " (cardsc/set-count (:cards @game-ratom)))]])

(defn how-to-play-button [display-how-to-play?-ratom]
  [:div
   [:input {:type "checkbox"
            :id "-how-to-play-toggle"
            :checked @display-how-to-play?-ratom
            :on-change #(swap! display-how-to-play?-ratom not)}]
   "how to play"])

(defmethod page/entering! :singleplayer [_]
  (mapv #(db/delete %) (db/find :game))
  (swap! game/state assoc :mode :singleplayer :found-sets-count 0)
  (db/tx (gamec/->game (shuffle cardsc/deck))))

(defmethod page/exiting! :singleplayer [_])

(defn singleplayer [game-ratom state-ratom]
  [:<>
   [:div.main-container
     [:div.left-container
      [stats game-ratom state-ratom]]
     [:div.center
      [game/card-buttons game-ratom state-ratom]]
     [:div
      [game/colorblind-button state-ratom]
      [how-to-play-button display-how-to-play?]]]
   [:div.main-container
    [:div.left-container]
    [:div.center
     (when @display-how-to-play?
       (htp/how-to-play))]]])

(defmethod page/render :singleplayer [_]
  [singleplayer state/game game/state])