(ns set.state-test
  (:require [speclj.core :refer :all]
            [set.state :refer :all]
            [set.main :as core]))

(describe "State for the game of Set"

  (it "has an initial state"
    (let [d1 core/deck
          d2 (rest core/deck)]
      (should= {:cards (take 12 d1)
                :selected-cards []
                :deck (drop 12 d1)} (initial-state d1))
      (should= {:cards (take 12 d2)
                :selected-cards []
                :deck (drop 12 d2)} (initial-state d2))))

  (it "selects cards"
    (let [deck [:a :b :c :d]
          s1 (initial-state deck)
          s2 {:cards [:b :c :d] :selected-cards [:a]}]
      (should= [:a] (:selected-cards (next-state s1 "1")))
      (should= [:b] (:selected-cards (next-state s1 "2")))
      (should= [:a :b] (:selected-cards (next-state s2 "1"))))))