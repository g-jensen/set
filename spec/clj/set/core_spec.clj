(ns clj.set.core-spec
  (:require [speclj.core :refer :all]
            [set.core :refer :all]))

(describe "The game of Set"
  (context "determines if a list of cards is a set"

    (it "for less than 3 cards"
      (should-not (set? []))
      (should-not (set? [(card :red 1 :oval :solid)]))
      (should-not (set? [(card :red 1 :oval :solid)
                         (card :green 2 :diamond :open)])))

    (it "for cards with the same colors"
      (let [c1 [(card :red 1 :diamond :open)
                (card :red 2 :oval :solid)
                (card :red 3 :squiggle :striped)]
            c2 [(card :green 1 :diamond :open)
                (card :green 2 :oval :solid)
                (card :green 2 :squiggle :striped)]
            c3 [(card :purple 1 :diamond :open)
                (card :purple 2 :diamond :solid)
                (card :purple 3 :squiggle :striped)]
            c4 [(card :red 1 :diamond :open)
                (card :red 2 :oval :solid)
                (card :red 3 :squiggle :solid)]]
        (should (set? c1))
        (should-not (set? c2))
        (should-not (set? c3))
        (should-not (set? c4))))

    (it "for cards with the same count"
      (let [c1 [(card :red 1 :diamond :open)
                (card :green 1 :oval :solid)
                (card :purple 1 :squiggle :striped)]
            c2 [(card :red 2 :diamond :open)
                (card :purple 2 :oval :solid)
                (card :purple 2 :squiggle :striped)]]
        (should (set? c1))
        (should-not (set? c2))))

    (it "for cards with the same shape"
      (let [c1 [(card :red 1 :diamond :open)
                (card :green 2 :diamond :solid)
                (card :purple 3 :diamond :striped)]]
        (should (set? c1))))

    (it "for cards with the same shade"
      (let [c1 [(card :red 1 :diamond :open)
                (card :green 2 :oval :open)
                (card :purple 3 :squiggle :open)]]
        (should (set? c1))))

    (it "for more than three cards"
      (let [c1 [(card :red 1 :diamond :open)
                (card :green 2 :oval :open)
                (card :purple 3 :squiggle :open)
                (card :green 3 :squiggle :open)]]
        (should-not (set? c1)))))

  (context "determines if a list of cards has a set"
    (it "for an empty list"
      (should-not (contains-set? [])))
    (it "for a list of length 3"
      (let [c1 [(card :red 1 :diamond :open)
                (card :red 2 :oval :solid)
                (card :red 3 :squiggle :striped)]]
        (should (contains-set? c1))))
    (it "for a list of length 4"
      (let [c1 [(card :red 1 :diamond :open)
                (card :red 2 :oval :solid)
                (card :red 3 :squiggle :striped)
                (card :red 4 :squiggle :striped)]
            c2 [(card :red 1 :diamond :open)
                (card :green 2 :oval :solid)
                (card :red 3 :squiggle :striped)
                (card :green 4 :squiggle :striped)]]
        (should (contains-set? c1))
        (should-not (contains-set? c2)))))

  (context "has a deck"
    (it "of length 81"
      (should= 81 (count deck)))))