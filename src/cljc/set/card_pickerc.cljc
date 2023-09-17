(ns set.card-pickerc
  (:require [set.utilc :as utilc]))

(defn selected? [{:keys [selected-cards]} card]
  (some #{card} selected-cards))

(defn- select [state card]
  (update state :selected-cards conj card))

(defn- deselect [state card]
  (update state :selected-cards #(remove #{card} %)))

(defn- set-selected [{:keys [cards] :as state} input]
  (let [card (nth cards input)]
    (if (selected? state card)
      (deselect state card)
      (select state card))))

(defn- replace-with-map [coll m]
  (map #(get m % %) coll))

(defn- ensure-set-exists [{:keys [cards shuffle-fn src-deck] :as state}]
  (if (utilc/contains-set? cards)
    state
    (utilc/reset-cards-and-deck state src-deck shuffle-fn)))

(defn- maybe-replace-cards [{:keys [selected-cards deck cards] :as state}]
  (if (utilc/set? selected-cards)
    (assoc state :cards (replace-with-map cards (zipmap selected-cards (take 3 deck))))
    state))

(defn- maybe-take-from-deck [{:keys [selected-cards deck] :as state}]
  (if (utilc/set? selected-cards)
    (assoc state :deck (drop 3 deck))
    state))

(defn- maybe-reset-selected [{:keys [selected-cards] :as state}]
  (if (= 3 (count selected-cards))
    (assoc state :selected-cards [])
    state))

(defn- update-found-sets-count [{:keys [selected-cards found-sets-count] :as state}]
  (let [found-sets-count (or found-sets-count 0)]
    (->> (if (utilc/set? (or selected-cards []))
           (inc found-sets-count)
           found-sets-count)
         (assoc state :found-sets-count))))

(defn- handle-invalid-state [{:keys [cards deck src-deck shuffle-fn] :as state}]
  (if-not (and (utilc/contains-set? cards) (> (count deck) 3))
    (utilc/reset-cards-and-deck state src-deck shuffle-fn)
    state))

(defn pick [state input]
  (-> state
      (set-selected input)
      (update-found-sets-count)
      (maybe-replace-cards)
      (maybe-take-from-deck)
      (maybe-reset-selected)
      (handle-invalid-state)))