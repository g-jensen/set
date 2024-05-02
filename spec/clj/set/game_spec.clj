(ns set.game-spec
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.apic :as apic]
            [set.cardsc :as cardsc]
            [set.cardsc-spec :as cardsc-spec]
            [set.fallout :as fo :refer [mojave nipton yes-man boone benny]]
            [set.dispatch :as dispatch]
            [set.gamec :as gamec]
            [set.playerc :as playerc]
            [set.game :as sut]
            [set.roomc :as roomc]
            [speclj.core :refer :all]))

(describe "game"
  (with-stubs)
  (cardsc-spec/with-bad-shuffle)
  (fo/init-with-schemas)

  (context "ws-start-game"
    (redefs-around [dispatch/push-to-players! (stub :push-to-players!)])

    (it "fails if connection-id is not host"
      (let [non-host-player @boone
            response (sut/ws-start-game {:connection-id (:conn-id non-host-player)})]
        (should= :fail (:status response))
        (should-be-nil (:payload response))
        (should= "Only the host can start the game!" (apic/flash-text response 0))))

    (it "succeeds if connection-id is host"
      (let [host-player @yes-man
            response (sut/ws-start-game {:connection-id (:conn-id host-player)})]
        (should= :ok (:status response))
        (should= (assoc @mojave :state :started) (:payload response))))

    (it "starts game"
      (let [response (sut/ws-start-game {:connection-id (:conn-id @yes-man)})]
        (should= :ok (:status response))
        (should= :started (:state (:payload response)))))

    (it "notifies players of game start"
      (let [response (sut/ws-start-game {:connection-id (:conn-id @yes-man)})
            players (map db/entity (:players @mojave))]
        (should= :ok (:status response))
        (should-have-invoked :push-to-players! {:with [players
                                                       :room/update
                                                       [@mojave]]})
        (should-have-invoked :push-to-players! {:with [players
                                                       :game/update
                                                       (gamec/->game cardsc/deck)]})))))