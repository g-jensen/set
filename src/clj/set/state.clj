(ns set.state)

(defn initial-state [deck]
  {:cards (take 12 deck)
   :selected-cards []
   :deck (drop 12 deck)})