(ns set.utilc-spec
  (:require [speclj.core :refer :all]
            [set.utilc :as sut]))

(describe "The game of Set"
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

  (it "has an initial state"
    (let [d1 sut/deck
          d2 (rest sut/deck)
          shuffled-d2 (sut/bad-shuffle d2)]
      (should= {:cards (take 12 d1)
                :selected-cards []
                :deck (drop 12 d1)
                :src-deck d1
                :shuffle-fn identity} (sut/initial-state d1 identity))
      (should= {:cards (take 12 shuffled-d2)
                :selected-cards []
                :deck (drop 12 shuffled-d2)
                :src-deck d2
                :shuffle-fn sut/bad-shuffle} (sut/initial-state d2 sut/bad-shuffle)))))