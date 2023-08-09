(ns clj.set.state-test
  (:require [speclj.core :refer :all]
            [set.state :refer :all]
            [set.core :as core]))

(describe "State for the game of Set"

  (it "has an initial state"
    (let [d1 core/deck
          d2 (rest core/deck)]
      (should= {:cards (take 12 d1)
                :selected-cards []
                :deck (drop 12 d1)} (initial-state d1))
      (should= {:cards (take 12 d2)
                :selected-cards []
                :deck (drop 12 d2)} (initial-state d2)))))