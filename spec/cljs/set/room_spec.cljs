(ns set.room-spec
  (:require-macros [speclj.core :refer [should-not= around stub should-have-invoked should-not-have-invoked with-stubs describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]]
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
      (should-have-invoked :ws/call! {:with [:room/fetch {:room-code fo/mojave-code} db/tx*]})))

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
    (before (wire/render [sut/nickname-prompt-or-room state/nickname]))

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
    (before (wire/render [sut/maybe-render-room sut/room]))

    (it "renders error if no room"
      (sut/install-room! "m0jave")
      (wire/flush)
      (should-select "#-room-not-found")
      (should-not-select "#-nickname-prompt-or-room"))

    ; still can't figure out why I can't db/tx mojave to have started state
    (it "renders error if trying to join when room already started"
      (with-redefs [sut/get-me (constantly nil)
                    sut/room   (reagent/atom (assoc @sut/room :state :started))]
        (wire/render [sut/maybe-render-room sut/room])
        (should-select "#-room-started")))

    (it "renders room"
      (with-redefs [sut/get-me (constantly @fo/benny)]
        (wire/render [sut/maybe-render-room sut/room])
        (should-not-select "#-room-started")
        (should-not-select "#-room-not-found")
        (should-select "#-prompt-or-room"))))

  (context "players display"
    (before (wire/render [sut/full-players sut/room sut/players]))

    (it "exists"
      (should-select "#-players"))

    (it "lists players with host"
      (should= "Yes Man (Host)" (wire/html! (str "#-player-" (:id @fo/yes-man))))
      (should= "Boone" (wire/html! (str "#-player-" (:id @fo/boone))))
      (should= "Benny" (wire/html! (str "#-player-" (:id @fo/benny)))))

    ; [GMJ] Can't figure out how to get sut/room to update
    #_(it "updates when player is added"
      (should-not-select (str "#-player-" (:id @fo/dogmeat)))
      (roomc/join-room! @sut/room @fo/dogmeat)
      (prn @sut/room)
      (prn @fo/mojave)
      (prn (db/ffind-by :room :code @sut/code))
      (should-select (str "#-player-" (:id @fo/dogmeat)))))

  (context "start button"
    (it "displays for host"
      (with-redefs [sut/get-me (constantly @fo/yes-man)]
        (wire/render [sut/full-room sut/room sut/players])
        (should-select "#-start-button")))

    (it "doesn't display for non-host"
      (with-redefs [sut/get-me (constantly @fo/benny)]
        (wire/render [sut/full-room sut/room sut/players])
        (should-not-select "#-start-button")))))