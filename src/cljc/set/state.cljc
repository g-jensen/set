(ns set.state)

(defn initial-state [deck]
  {:cards (take 12 deck)
   :selected-cards []
   :deck (drop 12 deck)})

(defn next-state [state input]
  (let [card (nth (:cards state) (dec input))
        selected (:selected-cards state)
        new-selected (conj selected card)]
    (if (some #{card} selected)
      (assoc state :selected-cards (remove #{card} selected))
      (if (= 3 (count new-selected))
        (assoc state :selected-cards [])
        (assoc state :selected-cards new-selected)))))