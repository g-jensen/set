(ns set.cards-spec
  (:require-macros [speclj.core :refer [describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require [set.color-blind :as cb]
            [set.settings :as settings]
            [speclj.core]
            [set.cardsc :as cardsc]
            [set.card-pickerc :as pickerc]
            [set.cards :as sut]
            [c3kit.wire.spec-helper :as wire]))

(def cards (:cards sut/initial-state))
(def card-0 (first cards))
(def card-1 (second cards))

(describe "Cards"
  (wire/with-root-dom)
  (before (reset! sut/state sut/initial-state))

  (it "on card click"
    (sut/on-click-card! 0)
    (should= (pickerc/pick sut/initial-state 0) @sut/state)
    (sut/on-click-card! 3)
    (should= (-> (pickerc/pick sut/initial-state 0)
                 (pickerc/pick 3)) @sut/state))

  (context "card->button"
    (before (wire/render [sut/card->button 0 card-0 settings/state]))

    (it "on-click"
      (should= "card" (wire/class-name "#-card-0"))
      (wire/click! "#-card-0")
      (should= (pickerc/pick sut/initial-state 0) @sut/state)
      (should= "card card-selected" (wire/class-name "#-card-0")))

    (it "updates with colorblind mode"
      (should-not-select "#-color-blind-0")
      (reset! cb/color-blind-mode? true)
      (wire/flush)
      (should= (cardsc/color-label card-0) (wire/html! "#-color-blind-0"))))

  (for [i (range 0 12)]
    (it (str "creates button element " i)
      (wire/render [sut/buttons settings/state])
      (should-select (str "#-card-" i)))))