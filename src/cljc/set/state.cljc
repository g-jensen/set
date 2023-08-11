(ns set.state)

(defn initial-state [deck]
  {:cards (take 12 deck)
   :selected-cards []
   :deck (drop 12 deck)})

(defn- select [state input]
  (let [card (nth (:cards state) (dec input))
        selected (:selected-cards state)
        new-selected (conj selected card)]
    (cond
      (some #{card} selected)     (remove #{card} selected)
      (= 3 (count new-selected))  []
      :else                       new-selected)))

(defn next-state [state input]
  (assoc state :selected-cards (select state input)))