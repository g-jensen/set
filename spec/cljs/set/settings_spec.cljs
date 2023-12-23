(ns set.settings-spec
  (:require-macros [speclj.core :refer [describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]])
  (:require [speclj.core]
            [set.settings :as sut]))

(describe "SETtings"

  (it "has an initial state"
    (should= {:color-blind-mode? false} @sut/state)))