(ns set.cards
  (:require [reagent.core :as reagent]
            [set.card-pickerc :as picker]
            [set.utilc :as utilc]))

(def initial-state (utilc/initial-state utilc/deck shuffle))
(def state (reagent/atom initial-state))

(defn on-click-card! [idx]
  (swap! state picker/pick idx))

(defn card->path [card]
  (str "cards/"
       (name (:color card)) "-"
       (name (:count card)) "-"
       (name (:shape card)) "-"
       (name (:shade card)) ".png"))

(defn- selected? [card]
  (some #{card} (:selected-cards @state)))

(defn card->button [idx card]
  [:input.card {:class    (when (selected? card) "card-selected")
                :id       (str "-card-" idx)
                :type     "image"
                :src      (card->path card)
                :on-click #(on-click-card! idx)}])

(defn buttons []
  [:div.card-container
   (map-indexed card->button (:cards @state))])

(defn stats []
  [:div
   (str "found: " (:found-sets-count @state) " "
        "exist: " (utilc/set-count (:cards @state)))])