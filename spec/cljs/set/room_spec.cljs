(ns set.room-spec
  (:require-macros [speclj.core :refer [redefs-around should-not= around stub should-have-invoked should-not-have-invoked with-stubs describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require [c3kit.apron.corec :as ccc]
            [c3kit.bucket.api :as db]
            [c3kit.wire.spec-helper :as wire]
            [reagent.core :as reagent]
            [set.cardsc :as cardsc]
            [set.cardsc-spec :as cardsc-spec]
            [set.fallout :as fo]
            [set.game :as game]
            [set.gamec :as gamec]
            [set.room :as sut]
            [set.page :as page]
            [set.roomc :as roomc]
            [set.state :as state]
            [set.routes :as routes]))

(describe "room"
  (with-stubs)
  (wire/stub-ws)
  (wire/with-root-dom)
  (fo/with-schemas)
  (before (db/clear)
          (fo/init)
          (sut/install-room! fo/mojave-code)
          (routes/load-page! :room))

  (context "entering"
    (it "fetches room"
      (should-have-invoked :ws/call! {:with [:room/fetch {:room-code fo/mojave-code} db/tx*]}))

    (it "sets game mode to multiplayer"
      (should= :multiplayer (:mode @game/state))))

  (context "nickname prompt"
    (before (wire/render [sut/nickname-prompt state/nickname]))

    (it "updates input on change"
      (wire/change! "#-nickname-input" "Lautrec")
      (should= "Lautrec" (wire/value "#-nickname-input"))
      (wire/change! "#-nickname-input" "Patches")
      (should= "Patches" (wire/value "#-nickname-input")))

    (context "button click"
      (before (reset! state/nickname nil))

      (context "updates nickname ratom"
        (it "when nickname is Lautrec"
          (wire/change! "#-nickname-input" "Lautrec")
          (should= nil @state/nickname)
          (wire/click! "#-join-button")
          (should= "Lautrec" @state/nickname))

        (it "when nickname is Patches"
          (wire/change! "#-nickname-input" "Patches")
          (should= nil @state/nickname)
          (wire/click! "#-join-button")
          (should= "Patches" @state/nickname)))

      (it "joins room"
        (wire/change! "#-nickname-input" "Lautrec")
        (wire/click! "#-join-button")
        (should-have-invoked :ws/call! {:with [:room/join
                                               {:nickname "Lautrec" :room-code "mojave"}
                                               db/tx*]}))

      (it "doesn't join room if blank nickname"
        (wire/change! "#-nickname-input" " ")
        (should= nil @state/nickname)
        (wire/click! "#-join-button")
        (should-not-have-invoked :ws/call!))))

  (context "nickname prompt or room"
    (before (wire/render [sut/nickname-prompt-or-room state/game sut/room sut/players state/nickname]))

    (it "renders nickname prompt if blank nickname"
      (reset! state/nickname "   ")
      (wire/flush)
      (should-select "#-nickname-prompt")
      (should-not-select "#-room"))

    (it "renders room if nickname"
      (reset! state/nickname "Yes Man")
      (wire/flush)
      (should-not-select "#-nickname-prompt")
      (should-select "#-room")))

  (context "maybe render room"
    (before (wire/render [sut/maybe-render-room state/game sut/room sut/players]))

    (it "renders error if no room"
      (sut/install-room! "m0jave")
      (wire/flush)
      (should-select "#-room-not-found")
      (should-not-select "#-nickname-prompt-or-room"))

    ; still can't figure out why I can't db/tx mojave to have started state
    (it "renders error if trying to join when room already started"
      (with-redefs [sut/get-me (constantly nil)
                    sut/room   (reagent/atom (assoc @sut/room :state :started))]
        (wire/render [sut/maybe-render-room state/game sut/room sut/players])
        ;(db/tx (assoc @sut/room :state :started))
        (should-select "#-room-started")))

    (it "renders room"
      (with-redefs [sut/get-me (constantly @fo/benny)]
        (wire/render [sut/maybe-render-room state/game sut/room sut/players])
        (should-not-select "#-room-started")
        (should-not-select "#-room-not-found")
        (should-select "#-prompt-or-room"))))

  (context "players display"
    (before (wire/render [sut/full-players sut/room sut/players]))

    (it "exists"
      (should-select "#-players"))

    (it "lists players with host"
      (should= "Yes Man (Host) | 0" (wire/html! (str "#-player-" (:id @fo/yes-man))))
      (should= "Boone | 0" (wire/html! (str "#-player-" (:id @fo/boone))))
      (should= "Benny | 0" (wire/html! (str "#-player-" (:id @fo/benny)))))

    ; [GMJ] Can't figure out how to get sut/room to update
    #_(it "updates when player is added"
      (should-not-select (str "#-player-" (:id @fo/dogmeat)))
      (roomc/join-room! @sut/room @fo/dogmeat)
      (should-select (str "#-player-" (:id @fo/dogmeat)))))

  (context "start button"
    (it "displays if in lobby"
      (with-redefs [sut/get-me (constantly @fo/yes-man)]
        (wire/render [sut/full-room state/game sut/room sut/players])
        (db/tx (assoc @sut/room :state :lobby))
        (should-select "#-start-button")))

    ; update problem again...
    (it "does not display if not in lobby"
      (with-redefs [sut/get-me (constantly @fo/yes-man)
                    sut/room (reagent/atom (assoc @sut/room :state :started))]
        (wire/render [sut/full-room state/game sut/room sut/players])
        ;(db/tx (assoc @sut/room :state :started))
        (should-not-select "#-start-button")))

    (it "displays for host"
      (with-redefs [sut/get-me (constantly @fo/yes-man)]
        (wire/render [sut/full-room state/game sut/room sut/players])
        (should-select "#-start-button")))

    (it "doesn't display for non-host"
      (with-redefs [sut/get-me (constantly @fo/benny)]
        (wire/render [sut/full-room state/game sut/room sut/players])
        (should-not-select "#-start-button")))

    (it "starts game on click"
      (wire/render [sut/start-button])
      (wire/click! "#-start-button")
      (should-have-invoked :ws/call! {:with [:game/start {} db/tx]})))

  (context "card buttons"
    (redefs-around [sut/get-me (constantly @fo/yes-man)])

    (it "displays when not in lobby"
      (with-redefs [sut/room (reagent/atom (assoc @sut/room :state :started))]
        (wire/render [sut/full-room state/game sut/room sut/players])
        (should-select "#-card-buttons")))

    (it "doesn't display when in lobby"
      (with-redefs [sut/room (reagent/atom (assoc @sut/room :state :lobby))]
        (wire/render [sut/full-room state/game sut/room sut/players])
        (should-not-select "#-card-buttons")))

    (context "three cards selected"
      (it "send submission and updates game state"
        (with-redefs [sut/room (reagent/atom (assoc @sut/room :state :started))
                      state/game (reagent/atom (gamec/->game cardsc/deck))]
          (let [selected-cards (mapv #(nth cardsc/deck %) (range 0 3))]
            (wire/render [sut/full-room state/game sut/room sut/players])
            (wire/click! "#-card-0")
            (wire/click! "#-card-1")
            (wire/click! "#-card-2")
            (should-have-invoked :ws/call! {:with [:game/submit-cards
                                                   {:selected-cards selected-cards}
                                                   ccc/noop]})
            (should= [] (:selected-cards @game/state))))))))