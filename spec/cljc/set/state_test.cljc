(ns set.state-test
  (:require [speclj.core :refer :all]
            [set.state :refer :all]
            [set.main :as main]))

(describe "State for the game of Set"

  (it "has an initial state"
    (let [d1 main/deck
          d2 (rest main/deck)]
      (should= {:cards (take 12 d1)
                :selected-cards []
                :deck (drop 12 d1)} (initial-state d1))
      (should= {:cards (take 12 d2)
                :selected-cards []
                :deck (drop 12 d2)} (initial-state d2))))

  (it "selects a new card"
    (let [deck [:a :b :c :d]
          s1 (initial-state deck)
          s2 {:cards deck :selected-cards [:a]}]
      (should= [:a] (:selected-cards (next-state s1 1)))
      (should= [:b] (:selected-cards (next-state s1 2)))
      (should= [:a :b] (:selected-cards (next-state s2 2)))))

  (it "deselects a selected card"
    (let [deck [:a :b :c :d]
          s1 {:cards deck :selected-cards [:a]}
          s2 {:cards deck :selected-cards [:a :b]}]
      (should= [] (:selected-cards (next-state s1 1)))
      (should= [:b] (:selected-cards (next-state s2 1)))
      (should= [:a] (:selected-cards (next-state s2 2)))))

  (it "deselects cards if 3 are selected"
    (let [s1 {:cards [:a :b :c :d]
              :selected-cards [:a :b]}]
      (should= [] (:selected-cards (next-state s1 3))))))