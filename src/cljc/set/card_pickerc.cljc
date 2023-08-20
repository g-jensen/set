(ns set.card-pickerc
  (:require [set.utilc :as utilc]))

(defn- select [state input]
  (let [card (nth (:cards state) input)
        selected (:selected-cards state)]
    (if (some #{card} selected)
      (remove #{card} selected)
      (conj selected card))))

(defn- replace-with-map [coll m]
  (map #(get m % %) coll))

(defn- update-cards [state]
  (let [{selected :selected-cards
         deck :deck
         cards :cards} state]
    (if (utilc/set? selected)
      (replace-with-map cards (zipmap selected (take 3 deck)))
      cards)))

(defn- update-deck [state]
  (let [deck (:deck state)
        src-deck (:src-deck state)
        shuffle-fn (:shuffle-fn state)]
    (cond
      (not (utilc/set? (:selected-cards state))) deck
      (<= (count deck) 3) (shuffle-fn src-deck)
      :else (drop 3 deck))))

(defn- update-selected [state]
  (let [selected (:selected-cards state)]
    (if (= 3 (count selected))
      []
      selected)))

(defn pick [state input]
  (as-> state state
        (assoc state :selected-cards (select state input))
        (assoc state :cards (update-cards state))
        (assoc state :deck (update-deck state))
        (assoc state :selected-cards (update-selected state))))