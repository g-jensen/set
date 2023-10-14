(ns set.cards-spec
  (:require-macros [speclj.core :refer [describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]])
  (:require [speclj.core]
            [set.utilc :as utilc]
            [set.card-pickerc :as pickerc]
            [set.cards :as sut]
            [c3kit.wire.spec-helper :as wire]
            [c3kit.wire.js :as wjs]))

(def cards (:cards sut/initial-state))
(def card-0 (first cards))
(def card-1 (second cards))

(describe "Cards"
  (before (reset! sut/state sut/initial-state))

  (it "on card click"
    (sut/on-click-card! 0)
    (should= (pickerc/pick sut/initial-state 0) @sut/state)
    (sut/on-click-card! 3)
    (should= (-> (pickerc/pick sut/initial-state 0)
                 (pickerc/pick 3)) @sut/state))

  (it "card -> file path"
    (should= "cards/green-one-diamond-open.png"
             (sut/card->path (utilc/card :green :one :diamond :open)))
    (should= "cards/red-one-diamond-open.png"
             (sut/card->path (utilc/card :red :one :diamond :open)))
    (should= "cards/red-two-diamond-open.png"
             (sut/card->path (utilc/card :red :two :diamond :open)))
    (should= "cards/red-two-squiggle-open.png"
             (sut/card->path (utilc/card :red :two :squiggle :open)))
    (should= "cards/red-two-squiggle-solid.png"
             (sut/card->path (utilc/card :red :two :squiggle :solid))))

  (context "card -> button"
      (it "for a basic card"
        (let [[but-outerhtml but-attribs] (sut/card->button 0 card-0)]
          (should= :input.card but-outerhtml)
          (should-be-nil                   (:class    but-attribs))
          (should= "-card-0"               (:id       but-attribs))
          (should= "image"                 (:type     but-attribs))
          (should= (sut/card->path card-0) (:src      but-attribs))
          (should-not-be-nil               (:on-click but-attribs))))

      (it "for a different card"
        (let [[_ but-attribs] (sut/card->button 1 card-1)]
          (should= (sut/card->path card-1) (:src but-attribs))))

      (it "for a card at a different index"
        (let [[_ but-attribs] (sut/card->button 1 card-1)]
          (should= "-card-1" (:id but-attribs))))

      (it "for a selected card"
        (sut/on-click-card! 1)
        (let [[_ but-attribs] (sut/card->button 1 card-1)]
          (should= "card-selected" (:class but-attribs))))

      ;; TODO - figure out how to test this
      #_(it "on-click"
        (wire/with-root-dom)
        (wire/render [sut/card->button 0 card-0])
        ;(wire/click! "#-card-0")
        ))

  (it "creates buttons element"
    (let [[outerhtml innerhtml] (sut/buttons)]
      (should= :div.card-container outerhtml)
      (should= 12 (count innerhtml))))

  (it "creates stats element"
    (let [[outerhtml innerhtml] (sut/stats)]
      (should= :div outerhtml)
      (should-not-be-nil innerhtml))))