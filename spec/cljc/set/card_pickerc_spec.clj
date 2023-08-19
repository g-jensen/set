(ns set.card-pickerc-spec
  (:require [speclj.core :refer :all]
            [set.card-pickerc :as sut]
            [set.utilc :as util]))

(describe "Card Picker"
  (it "selects a new card"
    (let [deck [:a :b :c :d]
          s1 (util/initial-state deck identity)
          s2 {:cards deck :selected-cards [:a]}]
      (should= [:a] (:selected-cards (sut/pick s1 0)))
      (should= [:b] (:selected-cards (sut/pick s1 1)))
      (should= [:a :b] (:selected-cards (sut/pick s2 1)))))

  (it "deselects a selected card"
    (let [deck [:a :b :c :d]
          s1 {:cards deck :selected-cards [:a]}
          s2 {:cards deck :selected-cards [:a :b]}]
      (should= [] (:selected-cards (sut/pick s1 0)))
      (should= [:b] (:selected-cards (sut/pick s2 0)))
      (should= [:a] (:selected-cards (sut/pick s2 1)))))

  (it "deselects cards if 3 are selected"
    (let [s1 {:cards [:a :b :c :d]
              :selected-cards [:a :b]
              :shuffle-fn (constantly nil)}]
      (should= [] (:selected-cards (sut/pick s1 2)))))

  (it "replaces selected cards if selected is set"
    (let [deck util/deck
          set (take 3 deck)
          s1 {:cards set
              :selected-cards (take 2 set)
              :deck [:a :b :c]
              :shuffle-fn (constantly nil)}
          s2 {:cards (apply concat [[:hello] set [:bye]])
              :selected-cards (rest set)
              :deck [:a :b :c :d]
              :shuffle-fn (constantly nil)}]
      (should= [:b :c :a] (:cards (sut/pick s1 2)))
      (should= [:hello :a :b :c :bye]
               (:cards (sut/pick s2 1)))))

  (it "removes 3 cards from deck if selected is set"
    (let [deck util/deck
          set (take 3 deck)
          s1 {:cards set
              :selected-cards (take 2 set)
              :deck [:a :b :c :d]}]
      (should= [:d] (:deck (sut/pick s1 2)))))

  (it "restocks an empty deck"
    (let [deck util/deck
          set (take 3 deck)
          s1 {:cards set
              :selected-cards (take 2 set)
              :deck [:a :b :c]
              :src-deck [:a :b :c :d :e :f]
              :shuffle-fn identity}
          s2 (assoc s1 :shuffle-fn util/bad-shuffle)]
      (should= [:a :b :c :d :e :f] (:deck (sut/pick s1 2)))
      (should= [:b :c :d :e :f :a] (:deck (sut/pick s2 2))))))