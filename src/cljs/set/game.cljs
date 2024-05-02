(ns set.game
  (:require [c3kit.apron.corec :as ccc]
            [c3kit.bucket.api :as db]
            [c3kit.wire.util :as util]
            [c3kit.wire.websocket :as ws]
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

(defmethod on-three-cards-selected! :multiplayer [_]
  (let [selected-cards (:selected-cards @state)]
    (ws/call! :game/submit-cards {:selected-cards selected-cards} ccc/noop)
    (swap! state assoc :selected-cards [])))

(defn- selected? [state card]
  (some #{card} (:selected-cards state)))

(defn- select-card [state card]
  (update state :selected-cards conj card))

(defn select-card! [state-ratom card]
  (swap! state-ratom #(select-card % card)))

(defn- deselect-card [state card]
  (update state :selected-cards #(vec (remove #{card} %))))

(defn deselect-card! [state-ratom card]
  (swap! state-ratom #(deselect-card % card)))

(defn- maybe-call-three-cards-selected! [state]
  (when (= 3 (count (:selected-cards state)))
    (on-three-cards-selected! state)))

(defn- on-click-card! [state-ratom card]
  (if-not (selected? @state-ratom card)
    (select-card! state-ratom card)
    (deselect-card! state-ratom card))
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
            :on-change #(swap! state-ratom toggle-color-blind)}]
   "color blind mode"])