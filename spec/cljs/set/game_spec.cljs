(ns set.game-spec
  (:require-macros [speclj.core :refer [should-end-with should-have-invoked with-stubs stub around describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require [c3kit.apron.corec :as ccc]
            [reagent.core :as reagent]
            [set.gamec :as gamec]
            [speclj.core]
            [set.cardsc :as cardsc]
            [set.game :as sut]
            [c3kit.wire.spec-helper :as wire]))

(def game (reagent/atom (gamec/->game cardsc/deck)))
(def cards (:cards @game))
(def card-0 (nth cards 0))
(def card-1 (nth cards 1))
(def green-card (ccc/ffilter #(= :green (% :color)) cardsc/deck))

(describe "Cards"
  (with-stubs)
  (wire/with-root-dom)
  (before (reset! sut/state sut/initial-state))

  (context "card buttons"
    (before (wire/render [sut/card-buttons game sut/state]))

    (it "exists"
      (should-select "#-card-buttons"))

    (for [i (range 0 12)]
      (it (str "creates button element " i)
        (wire/render [sut/card-buttons game sut/state])
        (should-select (str "#-card-" i))))

    (it "does not create button element 12"
      (wire/render [sut/card-buttons game sut/state])
      (should-not-select (str "#-card-" 12))))

  (context "colorblind button"
    (before (wire/render [sut/colorblind-button sut/state]))

    (it "exists"
      (should-select "#-color-blind-toggle"))

    (it "toggles state on click"
      (should-not (:color-blind-mode? @sut/state))
      (wire/click! "#-color-blind-toggle")
      (should (:color-blind-mode? @sut/state))
      (wire/click! "#-color-blind-toggle")
      (should-not (:color-blind-mode? @sut/state))))

  (context "card->button"

    (it "exists"
      (wire/render [sut/card->button sut/state card-0 0])
      (should-select "#-card-0"))

    (it "has image of card"
      (wire/render [sut/card->button sut/state card-0 0])
      (should-select "#-card-image-0")
      (should-end-with "/cards/red-one-diamond-open.png" (wire/src "#-card-image-0")))

    (context "on click"
      (it "selects the card if not already selected"
        (wire/render [sut/card->button sut/state card-0 0])
        (should= [] (:selected-cards @sut/state))
        (wire/click! "#-card-0")
        (should= [card-0] (:selected-cards @sut/state))

        (wire/render [sut/card->button sut/state card-1 1])
        (wire/click! "#-card-1")
        (should= [card-0 card-1] (:selected-cards @sut/state)))

      (it "deselects if card is already selected"
        (wire/render [sut/card->button sut/state card-0 0])
        (wire/click! "#-card-0")
        (wire/click! "#-card-0")
        (should= [] (:selected-cards @sut/state)))

      (it "updates class"
        (wire/render [sut/card->button sut/state card-0 0])
        (should= "card" (wire/class-name "#-card-0"))
        (wire/click! "#-card-0")
        (should= "card card-selected" (wire/class-name "#-card-0"))
        (wire/click! "#-card-0")
        (should= "card" (wire/class-name "#-card-0"))))

    (it "adds colorblind aid"
      (wire/render [sut/colorblind-button sut/state])
      (wire/click! "#-color-blind-toggle")

      (wire/render [sut/card->button sut/state card-0 0])
      (should= "R" (wire/html! "#-color-blind-0"))
      (wire/render [sut/card->button sut/state green-card 1])
      (should= "G" (wire/html! "#-color-blind-1"))

      (wire/render [sut/colorblind-button sut/state])
      (wire/click! "#-color-blind-toggle")

      (wire/render [sut/card->button sut/state green-card 1])
      (should-not-select "#-color-blind-1"))))