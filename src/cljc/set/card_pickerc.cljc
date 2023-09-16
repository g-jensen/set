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
  (->> (if (utilc/set? selected-cards)
         (replace-with-map cards (zipmap selected-cards (take 3 deck)))
         cards)
       (assoc state :cards)))

(defn- update-deck [{:keys [deck src-deck shuffle-fn] :as state}]
  (->> (cond
        (< (count deck) 3) (utilc/shuffle-until-set src-deck shuffle-fn)
        :else (drop 3 deck))
       (assoc state :deck)))

(defn- maybe-reset-selected [{:keys [selected-cards] :as state}]
  (let [selected selected-cards]
    (->> (if (= 3 (count selected))
           []
           selected)
         (assoc state :selected-cards))))

(defn- update-found-sets-count [{:keys [selected-cards found-sets-count] :as state}]
  (let [found-sets-count (or found-sets-count 0)]
    (->> (if (utilc/set? (or selected-cards []))
           (inc found-sets-count)
           found-sets-count)
         (assoc state :found-sets-count))))

(defn pick [state input]
  (-> state
      (set-selected input)
      (maybe-replace-cards)
      (update-deck)
      (update-found-sets-count)
      (maybe-reset-selected)
      (ensure-set-exists)))