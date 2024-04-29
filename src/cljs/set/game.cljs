(ns set.game
  (:require [c3kit.wire.util :as util]
            [reagent.core :as reagent]
            [set.cardsc :as cardsc]))

(defmulti on-three-cards-selected! :mode)

(def initial-state {:selected-cards    []
                    :color-blind-mode? false})
(def state (reagent/atom initial-state))

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
    (reset! state-ratom (select-card @state-ratom card))
    (reset! state-ratom (deselect-card @state-ratom card)))
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
  [:<>
   [:input {:type "checkbox"
            :id "-color-blind-toggle"
            :on-click #(reset! state-ratom (toggle-color-blind @state-ratom))}]
   "color blind mode"])