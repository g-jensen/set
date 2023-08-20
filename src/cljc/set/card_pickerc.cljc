(ns set.card-pickerc
  (:require [set.utilc :as utilc]))

(defn- select [{:keys [cards selected-cards]} input]
  (let [card (nth cards input)]
    (if (some #{card} selected-cards)
      (remove #{card} selected-cards)
      (conj selected-cards card))))

(defn- replace-with-map [coll m]
  (map #(get m % %) coll))

(defn- update-cards [{:keys [selected-cards deck cards]}]
  (if (utilc/set? selected-cards)
    (replace-with-map cards (zipmap selected-cards (take 3 deck)))
    cards))

(defn- update-deck [{:keys [deck src-deck shuffle-fn selected-cards]}]
  (cond
    (not (utilc/set? selected-cards)) deck
    (<= (count deck) 3) (shuffle-fn src-deck)
    :else (drop 3 deck)))

(defn- update-selected [{:keys [selected-cards]}]
  (let [selected selected-cards]
    (if (= 3 (count selected))
      []
      selected)))

(defn- update-found-sets-count [{:keys [selected-cards found-sets-count]}]
  (let [found-sets-count (or found-sets-count 1)]
    (if (utilc/set? (or selected-cards []))
      (inc found-sets-count)
      found-sets-count)))

(defn pick [state input]
  (as-> state state
        (assoc state :selected-cards (select state input))
        (assoc state :cards (update-cards state))
        (assoc state :deck (update-deck state))
        (assoc state :found-sets-count (update-found-sets-count state))
        (assoc state :selected-cards (update-selected state))))