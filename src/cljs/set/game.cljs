(ns set.game
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.util :as util]
            [reagent.core :as reagent]
            [set.cardsc :as cardsc]
            [set.gamec :as gamec]
            [set.state :as state]))

(def initial-state {:selected-cards    []
                    :color-blind-mode? false})
(def state (reagent/atom initial-state))

(defmulti on-three-cards-selected! :mode)

(defmethod on-three-cards-selected! :singleplayer [_]
  (let [selected (:selected-cards @state)]
    (gamec/process-card-submission! @state/game selected)
    (when (cardsc/set? selected)
      (swap! state update :found-sets-count inc))
    (swap! state assoc :selected-cards [])))

(defn- selected? [state card]
  (some #{card} (:selected-cards state)))

(defn- select-card [state card]
  (update state :selected-cards conj card))

(defn- deselect-card [state card]
  (update state :selected-cards #(remove #{card} %)))

(defn- maybe-call-three-cards-selected! [state]
  (when (= 3 (count (:selected-cards state)))
    (on-three-cards-selected! state)))

(defn- on-click-card! [state-ratom card]
  (if-not (selected? @state-ratom card)
    (swap! state-ratom #(select-card % card))
    (swap! state-ratom #(deselect-card % card)))
  (maybe-call-three-cards-selected! @state-ratom))

(defn card->button [state-ratom card idx]
  [:div.card
   {:id (str "-card-" idx)
    :class (when (selected? @state-ratom card) "card-selected")
    :on-click #(on-click-card! state-ratom card)}
   (when (:color-blind-mode? @state-ratom)
     [:div.color-blind-indicator
      {:id (str "-color-blind-" idx)}
      (cardsc/color-label card)])
   [:input {:type  "image"
            :id    (str "-card-image-" idx)
            :src   (cardsc/card->path card)}]])

(defn card-buttons [game-ratom state-ratom]
  [:div.card-container
   {:id "-card-buttons"}
   (let [cards (:cards @game-ratom)]
     (util/with-react-keys
       (map-indexed (fn [idx card] [card->button state-ratom card idx]) cards)))])

(defn- toggle-color-blind [state]
  (update state :color-blind-mode? not))

(defn colorblind-button [state-ratom]
  [:div
   [:input {:type "checkbox"
            :id "-color-blind-toggle"
            :checked (:color-blind-mode? @state-ratom)
            :on-click #(swap! state-ratom toggle-color-blind)}]
   "color blind mode"])