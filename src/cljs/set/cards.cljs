(ns set.cards
  (:require [reagent.core :as reagent]
            [set.card-pickerc :as picker]
            [set.cardsc :as cardsc]
            [set.color-blind :as cb]))

(def initial-state (cardsc/initial-state cardsc/deck shuffle))
(def state (reagent/atom initial-state))

(defn on-click-card! [idx]
  (swap! state picker/pick idx))

(def selected? #(picker/selected? @state %))

(defn card->button [idx card _]
  [:div.card {:class    (when (selected? card) "card-selected")
              :id       (str "-card-" idx)
              :on-click #(on-click-card! idx)}
   (when @cb/color-blind-mode? [:div.color-blind-indicator
                                {:id (str "-color-blind-" idx)}
                                (cardsc/color-label card)])
   [:input {:type     "image"
            :src      (cardsc/card->path card)}]])

(defn buttons [settings]
  [:div.card-container
   (map-indexed (fn [idx card] [card->button idx card settings]) (:cards @state))])