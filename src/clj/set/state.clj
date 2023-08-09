(ns set.state)

(defn initial-state [deck]
  {:cards (take 12 deck)
   :selected-cards []
   :deck (drop 12 deck)})

(defn next-state [state input]
  (let [card (nth (:cards state) (dec (Integer/parseInt input)))]
    (update state :selected-cards conj card)))