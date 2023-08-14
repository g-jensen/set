(ns set.components-spec
  (:require-macros [speclj.core :refer [describe context it should= should-contain should should-not before]])
  (:require [speclj.core]
            [set.components :as components]
            [set.main :as main]))

(describe "A Collection of TicTacToe Components"

  (it "converts a card to a file path"
    (should= "cards/green-one-diamond-open.png"
             (components/card->path (main/card :green :one :diamond :open)))
    (should= "cards/red-one-diamond-open.png"
             (components/card->path (main/card :red :one :diamond :open)))
    (should= "cards/red-two-diamond-open.png"
             (components/card->path (main/card :red :two :diamond :open)))
    (should= "cards/red-two-squiggle-open.png"
             (components/card->path (main/card :red :two :squiggle :open)))
    (should= "cards/red-two-squiggle-solid.png"
             (components/card->path (main/card :red :two :squiggle :solid)))))