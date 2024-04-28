(ns set.gamec-spec
  (:require [speclj.core #?(:clj :refer :cljs :refer-macros) [around context describe it should= should-be-nil should-contain should should-not before with-stubs]]
            [set.gamec :as sut]
            [set.cardsc :as cardsc]
            [set.cardsc-spec :as cardsc-spec]))

(describe "gamec"
  (cardsc-spec/with-bad-shuffle)

  (context "->game"
    (it "sets cards and deck"
      (should= {:kind :game
                :cards (take 12 cardsc/deck)
                :deck (drop 12 cardsc/deck)}
               (sut/->game cardsc/deck)))

    (it "guarantees a set in cards"
      (let [shuffled-deck (shuffle cardsc/deck)]
        (should= {:kind :game
                  :cards (take 12 shuffled-deck)
                  :deck (drop 12 shuffled-deck)}
                 (sut/->game cardsc/deck cardsc-spec/cards-with-no-set)))))

  (let [{:keys [deck cards] :as game} (sut/->game cardsc/deck)]
    (context "replaces selected cards if selected is set"
      (it "first 3 cards"
        (let [selected-cards (take 3 cards)
              new-game (sut/process-card-submission game selected-cards)]
          (should= (concat (take 3 deck) (drop 3 cards)) (:cards new-game))))

      (it "cards 4 thru 6"
        (let [selected-cards (map #(nth cards %) (range 3 6))
              new-game (sut/process-card-submission game selected-cards)]
            (should= (concat (take 3 cards) (take 3 deck) (drop 6 cards)) (:cards new-game))))))

  (it "removes 3 cards from deck if selected is set"
    (let [{:keys [deck cards] :as game} (sut/->game cardsc/deck)
          selected-cards (take 3 cards)
          new-game (sut/process-card-submission game selected-cards)]
      (should= (drop 3 deck) (:deck new-game))))

  (it "ensures that there is always at least one set in cards"
    (let [cards-with-set (take 3 cardsc/deck)
          deck  (take 3 cardsc-spec/cards-with-no-set)
          cards (concat cards-with-set (drop 3 cardsc-spec/cards-with-no-set))
          game  (sut/->game deck cards)
          new-game (sut/process-card-submission game cards-with-set)]
      (should= (drop 12 (shuffle cardsc/deck)) (:deck new-game))
      (should= (take 12 (shuffle cardsc/deck)) (:cards new-game))))

  (context "shuffles until there is a set"
    (it "with a possible set"
      (let [d1 (concat cardsc-spec/cards-with-no-set cardsc/deck)]
        (should= (concat (drop 2 d1) (take 2 d1))
                 (sut/shuffle-until-set d1 shuffle))))
    (it "with no possible set"
      (should-be-nil (sut/shuffle-until-set cardsc-spec/cards-with-no-set shuffle))))

  (it "restocks an empty deck"
    (let [shuffled-deck (shuffle cardsc/deck)
          cards-with-set (take 3 cardsc/deck)
          game (sut/->game [] (concat cards-with-set (drop 3 cardsc-spec/cards-with-no-set)))
          new-game (sut/process-card-submission game cards-with-set)]
      (should= (drop 12 shuffled-deck) (:deck new-game))
      (should= (take 12 shuffled-deck) (:cards new-game)))))