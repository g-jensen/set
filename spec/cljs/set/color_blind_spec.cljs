(ns set.color-blind-spec
  (:require-macros [speclj.core :refer [describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]])
  (:require [speclj.core]
            [set.color-blind :as sut]
            [c3kit.wire.spec-helper :as wire]))

(describe "Color blind mode"
  (wire/with-root-dom)
  (before (reset! sut/color-blind-mode? false))

  (it "toggles"
    (wire/render [sut/button])
    (wire/click! "#-color-blind-toggle")
    (should @sut/color-blind-mode?)
    (wire/click! "#-color-blind-toggle")
    (should-not @sut/color-blind-mode?)))