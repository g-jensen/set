(ns set.components-spec
  (:require-macros [speclj.core :refer [describe context it should= should-contain should should-not before]])
  (:require [speclj.core]
            [set.main :as main]))

(describe "A Collection of TicTacToe Components"
  (it "fails"
    (should= main/attributes 1)))