(ns clj.set.state-test
  (:require [speclj.core :refer :all]
            [set.state :refer :all]
            [set.core :as core]))

(describe "State for the game of Set"

  (it "has an initial state"
    (should= {:cards (take 12 core/deck)
              :selected-cards []
              :deck (drop 12 core/deck)} (initial-state core/deck))
    (let [deck (rest core/deck)]
      (should= {:cards (take 12 deck)
                :selected-cards []
                :deck (drop 12 deck)} (initial-state deck)))))