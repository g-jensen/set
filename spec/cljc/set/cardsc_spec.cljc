(ns set.cardsc-spec
  (:require [speclj.core #?(:clj :refer :cljs :refer-macros) [around context describe it should= should-be-nil should-contain should should-not before with-stubs]]
            [set.cardsc :as sut]))

(def bad-shuffle #(conj (vec (rest %)) (first %)))
(defn with-bad-shuffle []
  (around [it] (with-redefs [shuffle bad-shuffle] (it))))
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

(describe "Cards"
  (with-bad-shuffle)
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