(ns set.card-pickerc-spec
  (:require [set.cardsc :as cardsc]
            [speclj.core :refer :all]
            [set.card-pickerc :as sut]
            [set.cardsc :as util]
            [set.cardsc-spec :as util-spec]))

(describe "Card Picker"
  (it "selects a new card"
    (let [deck [:a :b :c :d]
          s1 (util/initial-state deck identity)
          s2 {:cards deck :selected-cards [:a] :shuffle-fn identity}]
      (should= [:a] (:selected-cards (sut/pick s1 0)))
      (should= [:b] (:selected-cards (sut/pick s1 1)))
      (should= [:a :b] (:selected-cards (sut/pick s2 1)))))

  (it "deselects a selected card"
    (let [deck [:a :b :c :d]
          s1 {:cards deck :selected-cards [:a] :shuffle-fn identity}
          s2 {:cards deck :selected-cards [:a :b] :shuffle-fn identity}]
      (should= [] (:selected-cards (sut/pick s1 0)))
      (should= [:b] (:selected-cards (sut/pick s2 0)))
      (should= [:a] (:selected-cards (sut/pick s2 1)))))

  (it "deselects cards if 3 are selected"
    (let [s1 {:cards [:a :b :c :d]
              :selected-cards [:a :b]
              :shuffle-fn identity}]
      (should= [] (:selected-cards (sut/pick s1 2)))))

  (it "replaces selected cards if selected is set"
    (let [deck util/deck
          set (take 3 (drop 3 deck))
          s1 {:cards set
              :selected-cards (take 2 set)
              :deck deck
              :shuffle-fn identity}
          s2 {:cards (apply concat [[:hello] set [:bye]])
              :selected-cards (rest set)
              :deck deck
              :shuffle-fn identity}]
      (should= (cardsc/bad-shuffle (take 3 deck)) (:cards (sut/pick s1 2)))
      (should= (apply concat [[:hello] (take 3 deck) [:bye]])
               (:cards (sut/pick s2 1)))))

  (it "ensures that there is always at least one set in cards"
    (let [bad-cards util-spec/cards-with-no-set
          good-cards (take 3 cardsc/deck)
          s1 {:src-deck       cardsc/deck
              :cards          (concat good-cards (drop 3 bad-cards))
              :selected-cards (take 2 good-cards)
              :deck           (take 3 bad-cards)
              :shuffle-fn     cardsc/bad-shuffle}]
      (should= (drop 12 (cardsc/bad-shuffle cardsc/deck)) (:deck (sut/pick s1 2)))
      (should= (take 12 (cardsc/bad-shuffle cardsc/deck)) (:cards (sut/pick s1 2)))))

  (it "removes 3 cards from deck if selected is set"
    (let [deck util/deck
          set (take 3 deck)
          s1 {:cards          set
              :selected-cards (take 2 set)
              :deck           deck}]
      (should= (drop 3 deck) (:deck (sut/pick s1 2)))))

  (it "increases found-sets-count if selected is set"
    (let [deck util/deck
          set (take 3 deck)
          s1 {:cards set
              :selected-cards (take 2 set)
              :deck [:a :b :c :d]
              :found-sets-count 0}
          s2 (assoc s1 :found-sets-count 1)]
      (should= 1 (:found-sets-count (sut/pick s1 2)))
      (should= 2 (:found-sets-count (sut/pick s2 2)))))

  (it "restocks an empty deck"
    (let [set (take 3 util/deck)
          s1 {:cards set
              :selected-cards (take 2 set)
              :src-deck util/deck
              :deck [:g :h :i]
              :shuffle-fn identity}
          s2 (assoc s1 :shuffle-fn util/bad-shuffle)]
      (should= (drop 12 util/deck) (:deck (sut/pick s1 2)))
      (should= (drop 12 (util/bad-shuffle util/deck)) (:deck (sut/pick s2 2))))))