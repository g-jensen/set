(ns set.cardsc-spec
  (:require [speclj.core :refer :all]
            [set.cardsc :as sut]))

(def cards-with-no-set [(sut/card :purple :two :diamond :solid)
                        (sut/card :red :one :diamond :open)
                        (sut/card :red :two :oval :striped)
                        (sut/card :green :two :diamond :solid)
                        (sut/card :purple :three :squiggle :solid)
                        (sut/card :purple :two :diamond :striped)
                        (sut/card :purple :two :squiggle :solid)
                        (sut/card :red :three :diamond :open)
                        (sut/card :green :three :oval :solid)
                        (sut/card :purple :one :squiggle :open)
                        (sut/card :red :two :squiggle :open)
                        (sut/card :green :three :diamond :open)])

(describe "Set Utilities"
  (context "determines if a list of cards is a set"

    (it "for less than 3 cards"
      (should-not (sut/set? []))
      (should-not (sut/set? [(sut/card :red :one :oval :solid)]))
      (should-not (sut/set? [(sut/card :red :one :oval :solid)
                         (sut/card :green :two :diamond :open)])))

    (it "for cards with the same colors"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :red :two :oval :solid)
                (sut/card :red :three :squiggle :striped)]
            c2 [(sut/card :green :one :diamond :open)
                (sut/card :green :two :oval :solid)
                (sut/card :green :two :squiggle :striped)]
            c3 [(sut/card :purple :one :diamond :open)
                (sut/card :purple :two :diamond :solid)
                (sut/card :purple :three :squiggle :striped)]
            c4 [(sut/card :red :one :diamond :open)
                (sut/card :red :two :oval :solid)
                (sut/card :red :three :squiggle :solid)]]
        (should (sut/set? c1))
        (should-not (sut/set? c2))
        (should-not (sut/set? c3))
        (should-not (sut/set? c4))))

    (it "for cards with the same count"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :green :one :oval :solid)
                (sut/card :purple :one :squiggle :striped)]
            c2 [(sut/card :red :two :diamond :open)
                (sut/card :purple :two :oval :solid)
                (sut/card :purple :two :squiggle :striped)]]
        (should (sut/set? c1))
        (should-not (sut/set? c2))))

    (it "for cards with the same shape"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :green :two :diamond :solid)
                (sut/card :purple :three :diamond :striped)]]
        (should (sut/set? c1))))

    (it "for cards with the same shade"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :green :two :oval :open)
                (sut/card :purple :three :squiggle :open)]]
        (should (sut/set? c1))))

    (it "for more than three cards"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :green :two :oval :open)
                (sut/card :purple :three :squiggle :open)
                (sut/card :green :three :squiggle :open)]]
        (should-not (sut/set? c1)))))

  (context "calculates the number of sets in a list of cards"
    (it "for an empty list"
      (should= 0 (sut/set-count [])))

    (it "for a list of length 3"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :red :two :oval :solid)
                (sut/card :red :three :squiggle :striped)]]
        (should= 1 (sut/set-count c1))))

    (it "for a list of length 4"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :red :two :oval :solid)
                (sut/card :red :three :squiggle :striped)
                (sut/card :green :three :squiggle :striped)]]
        (should= 1 (sut/set-count c1))))

    (it "for a list of length 5"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :red :two :oval :solid)
                (sut/card :red :three :squiggle :striped)
                (sut/card :green :three :squiggle :striped)
                (sut/card :purple :three :squiggle :striped)]]
        (should= 2 (sut/set-count c1)))))

  (context "determines if a list of cards has a set"
    (it "for an empty list"
      (should-not (sut/contains-set? [])))
    (it "for a list of length 3"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :red :two :oval :solid)
                (sut/card :red :three :squiggle :striped)]]
        (should (sut/contains-set? c1))))
    (it "for a list of length 4"
      (let [c1 [(sut/card :red :one :diamond :open)
                (sut/card :red :two :oval :solid)
                (sut/card :red :three :squiggle :striped)
                (sut/card :red :four :squiggle :striped)]
            c2 [(sut/card :red :one :diamond :open)
                (sut/card :green :two :oval :solid)
                (sut/card :red :three :squiggle :striped)
                (sut/card :green :four :squiggle :striped)]]
        (should (sut/contains-set? c1))
        (should-not (sut/contains-set? c2)))))

  (context "has a deck"
    (it "of length 81"
      (should= 81 (count sut/deck))))

  (context "shuffles until there is a set"
    (it "with a possible set"
      (let [d1 sut/deck
            d2 (concat cards-with-no-set sut/deck)]
        (should= d1 (sut/shuffle-until-set d1 identity))
        (should= (concat (drop 2 d2) (take 2 d2))
                 (sut/shuffle-until-set d2 sut/bad-shuffle))))
    (it "with no possible set"
      (should-be-nil (sut/shuffle-until-set cards-with-no-set sut/bad-shuffle))))

  (context "has an initial state"
    (it "with correct keys"
      (let [d1 sut/deck
            d2 (rest sut/deck)
            shuffled-d2 (sut/bad-shuffle d2)]
        (should= {:cards (take 12 d1)
                  :selected-cards []
                  :deck (drop 12 d1)
                  :src-deck d1
                  :shuffle-fn identity
                  :found-sets-count 0} (sut/initial-state d1 identity))
        (should= {:cards (take 12 shuffled-d2)
                  :selected-cards []
                  :deck (drop 12 shuffled-d2)
                  :src-deck d2
                  :shuffle-fn sut/bad-shuffle
                  :found-sets-count 0} (sut/initial-state d2 sut/bad-shuffle))))

    (it "that keeps shuffling until there is a set is in cards"
      (let [d1 (concat cards-with-no-set sut/deck)
            shuffled-d1 (concat (drop 2 d1) (take 2 d1))]
        (should= {:cards (take 12 shuffled-d1)
                  :selected-cards []
                  :deck (drop 12 shuffled-d1)
                  :src-deck d1
                  :shuffle-fn sut/bad-shuffle
                  :found-sets-count 0} (sut/initial-state d1 sut/bad-shuffle)))))

  (it "card->file path"
    (should= "/cards/green-one-diamond-open.png"
             (sut/card->path (sut/card :green :one :diamond :open)))
    (should= "/cards/red-one-diamond-open.png"
             (sut/card->path (sut/card :red :one :diamond :open)))
    (should= "/cards/red-two-diamond-open.png"
             (sut/card->path (sut/card :red :two :diamond :open)))
    (should= "/cards/red-two-squiggle-open.png"
             (sut/card->path (sut/card :red :two :squiggle :open)))
    (should= "/cards/red-two-squiggle-solid.png"
             (sut/card->path (sut/card :red :two :squiggle :solid))))

  (it "gets the label of the color of a card"
    (should= "R" (sut/color-label {:color :red}))
    (should= "G" (sut/color-label {:color :green}))
    (should= "P" (sut/color-label {:color :purple}))))