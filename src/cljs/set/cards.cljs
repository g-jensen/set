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

(defn card->button [idx card]
  [:input.card {:id       (str "-card-" idx)
           :type     "image"
           :src      (card->path card)
           :on-click #(on-click-card! idx)
           :border   (when (some #{card} (:selected-cards @state))
                       "2px")}])

(defn buttons []
  [:div.card-container
   (map-indexed card->button (:cards @state))])