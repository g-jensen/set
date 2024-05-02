(ns set.singleplayer-spec
  (:require-macros [speclj.core :refer [should-not= around stub should-have-invoked should-not-have-invoked with-stubs describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require [c3kit.apron.corec :as ccc]
            [c3kit.bucket.api :as db]
            [c3kit.wire.spec-helper :as wire]
            [set.cardsc :as cardsc]
            [set.cardsc-spec :as cardsc-spec]
            [set.fallout :as fo]
            [set.game :as game]
            [set.gamec :as gamec]
            [set.singleplayer :as sut]
            [set.page :as page]
            [set.state :as state]))

(describe "singleplayer"
  (wire/with-root-dom)
  (fo/with-schemas)
  (cardsc-spec/with-bad-shuffle)
  (before (reset! game/state game/initial-state))

  (context "page/entering!"
    (it "updates game state"
      (should-be-nil (:mode @game/state))
      (page/entering! :singleplayer)
      (should= :singleplayer (:mode @game/state)))

    (it "creates a new game"
      (should-be-nil (db/ffind :game))
      (page/entering! :singleplayer)
      (let [game (db/ffind :game)]
        (should= (assoc (gamec/->game (shuffle cardsc/deck)) :id (:id game))
                 game))))

  (context "three cards selected"
    (it "updates game and game state"
      (page/entering! :singleplayer)
      (let [initial-game @state/game
            selected-cards (mapv #(nth cardsc/deck %) (range 3 6))]
        (wire/render [sut/singleplayer state/game game/state])
        (wire/click! "#-card-2")
        (wire/click! "#-card-3")
        (wire/click! "#-card-4")
        (should-not= initial-game (db/ffind :game))
        (should= (gamec/process-card-submission @state/game selected-cards) (db/ffind :game))
        (should= 1 (:found-sets-count @game/state))
        (should= [] (:selected-cards @game/state)))))

  (context "stats"
    (it "exists"
      (wire/render [sut/singleplayer game/state state/game])
      (should-select "#-found")
      (should-select "#-exist"))

    (it "displays found and exist"
      (with-redefs [cardsc/set-count (constantly 2)]
        (swap! game/state assoc :found-sets-count 1)
        (wire/render [sut/stats state/game game/state])
        (should= "Found: 1" (wire/html! "#-found"))
        (should= "Exist: 2" (wire/html! "#-exist"))
        (swap! game/state assoc :found-sets-count 2)
        (wire/flush)
        (should= "Found: 2" (wire/html! "#-found"))
        (should= "Exist: 2" (wire/html! "#-exist")))))

  (context "how to play"
    (before (wire/render [sut/singleplayer game/state state/game]))

    (it "exists"
      (should-select "#-how-to-play"))

    (context "has a toggle"
      (it "that exists"
        (should-select "#-how-to-play-toggle"))

      (it "that is checked by default"
        (wire/checked? "#-how-to-play-toggle"))

      (it "that updates how to play"
        (should-select "#-how-to-play")
        (wire/change! "#-how-to-play-toggle" false)
        (should-not-select "#-how-to-play")))))