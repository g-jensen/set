(ns set.color-blind-spec
  (:require-macros [speclj.core :refer [describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]])
  (:require [speclj.core]
            [set.color-blind :as sut]))

(describe "Color blind mode"
  (before (reset! sut/color-blind-mode false))

  (it "toggles"
    (sut/on-toggle-color-blind!)
    (should @sut/color-blind-mode)
    (sut/on-toggle-color-blind!)
    (should-not @sut/color-blind-mode))

  (it "has button"
    (let [[outerhtml checkbox label] (sut/button)]
      (should= :div outerhtml)
      (should= [:input {:type "checkbox"}] checkbox)
      (should= [:p "color blind mode"] label))))