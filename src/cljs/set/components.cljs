(ns set.components
  (:require [reagent.core :as r]
            [set.main :as main]
            [set.state :as state]))

(def state (r/atom (state/initial-state main/deck shuffle)))

(defn card->path [card]
  (str "cards/"
       (name (:color card)) "-"
       (name (:count card)) "-"
       (name (:shape card)) "-"
       (name (:shade card)) ".png"))

(defn card->button [idx card]
  [:input {:type "image"
           :src (card->path card)
           :on-click #(swap! state state/next-state (inc idx))
           :border (if (some #{card} (:selected-cards @state))
                     "2px")}])

(defn vec-insert [vec element idx]
  (concat (subvec vec 0 idx) [element] (subvec vec idx)))

(defn main []
  [:div
   (-> (map-indexed card->button (:cards @state)) (vec)
       (vec-insert [:br] 4) (vec)
       (vec-insert [:br] 9))])