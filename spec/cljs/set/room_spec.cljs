(ns set.room-spec
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
            [set.room :as sut]
            [set.page :as page]
            [set.roomc :as roomc]
            [set.state :as state]
            [set.routes :as routes]))

(describe "room"
  (with-stubs)
  (wire/stub-ws)
  (wire/with-root-dom)
  (before (db/clear)
          (sut/install-room! fo/mojave-code)
          (routes/load-page! :room))
  (fo/init-with-schemas)

  (context "entering"
    (it "fetches room"
      (should-have-invoked :ws/call! {:with [:room/fetch {:room-code fo/mojave-code} db/tx*]})))

  (context "players display"
    (before (wire/render [set.layout/default]))

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
      (should-select (str "#-player-" (:id @fo/dogmeat))))))