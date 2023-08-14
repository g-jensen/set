(ns set.main-spec
  (:require [speclj.core :refer :all]
            [set.main :refer :all]))

(describe "The game of Set"
  (context "determines if a list of cards is a set"

    (it "for less than 3 cards"
      (should-not (set? []))
      (should-not (set? [(card :red :one :oval :solid)]))
      (should-not (set? [(card :red :one :oval :solid)
                         (card :green :two :diamond :open)])))

    (it "for cards with the same colors"
      (let [c1 [(card :red :one :diamond :open)
                (card :red :two :oval :solid)
                (card :red :three :squiggle :striped)]
            c2 [(card :green :one :diamond :open)
                (card :green :two :oval :solid)
                (card :green :two :squiggle :striped)]
            c3 [(card :purple :one :diamond :open)
                (card :purple :two :diamond :solid)
                (card :purple :three :squiggle :striped)]
            c4 [(card :red :one :diamond :open)
                (card :red :two :oval :solid)
                (card :red :three :squiggle :solid)]]
        (should (set? c1))
        (should-not (set? c2))
        (should-not (set? c3))
        (should-not (set? c4))))

    (it "for cards with the same count"
      (let [c1 [(card :red :one :diamond :open)
                (card :green :one :oval :solid)
                (card :purple :one :squiggle :striped)]
            c2 [(card :red :two :diamond :open)
                (card :purple :two :oval :solid)
                (card :purple :two :squiggle :striped)]]
        (should (set? c1))
        (should-not (set? c2))))

    (it "for cards with the same shape"
      (let [c1 [(card :red :one :diamond :open)
                (card :green :two :diamond :solid)
                (card :purple :three :diamond :striped)]]
        (should (set? c1))))

    (it "for cards with the same shade"
      (let [c1 [(card :red :one :diamond :open)
                (card :green :two :oval :open)
                (card :purple :three :squiggle :open)]]
        (should (set? c1))))

    (it "for more than three cards"
      (let [c1 [(card :red :one :diamond :open)
                (card :green :two :oval :open)
                (card :purple :three :squiggle :open)
                (card :green :three :squiggle :open)]]
        (should-not (set? c1)))))

  (context "determines if a list of cards has a set"
    (it "for an empty list"
      (should-not (contains-set? [])))
    (it "for a list of length 3"
      (let [c1 [(card :red :one :diamond :open)
                (card :red :two :oval :solid)
                (card :red :three :squiggle :striped)]]
        (should (contains-set? c1))))
    (it "for a list of length 4"
      (let [c1 [(card :red :one :diamond :open)
                (card :red :two :oval :solid)
                (card :red :three :squiggle :striped)
                (card :red :four :squiggle :striped)]
            c2 [(card :red :one :diamond :open)
                (card :green :two :oval :solid)
                (card :red :three :squiggle :striped)
                (card :green :four :squiggle :striped)]]
        (should (contains-set? c1))
        (should-not (contains-set? c2)))))

  (context "has a deck"
    (it "of length 81"
      (should= 81 (count deck)))))