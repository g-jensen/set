(ns set.stats-spec
  (:require-macros [speclj.core :refer [stub describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]])
  (:require [c3kit.wire.spec-helper :as wire]
            [reagent.core :as reagent]
            [set.cards :as cards]
            [set.cardsc :as cardsc]
            [speclj.core]
            [set.stats :as sut]))

(def state (reagent/atom {}))

(describe "Stats"
  (it "displays stats"
    (with-redefs [cardsc/set-count (constantly 2)]
      (swap! state assoc :found-sets-count 1)
      (wire/render [sut/stats state])
      (should= "Found: 1" (wire/html! "#-found"))
      (should= "Exist: 2" (wire/html! "#-exist"))
      (swap! state assoc :found-sets-count 2)
      (wire/flush)
      (should= "Found: 2" (wire/html! "#-found"))
      (should= "Exist: 2" (wire/html! "#-exist")))))