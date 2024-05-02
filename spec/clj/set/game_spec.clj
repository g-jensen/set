(ns set.game-spec
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.apic :as apic]
            [set.cardsc :as cardsc]
            [set.cardsc-spec :as cardsc-spec]
            [set.fallout :as fo :refer [mojave nipton yes-man boone benny caravan]]
            [set.dispatch :as dispatch]
            [set.gamec :as gamec]
            [set.playerc :as playerc]
            [set.game :as sut]
            [set.roomc :as roomc]
            [speclj.core :refer :all]))

(describe "game"
  (with-stubs)
  (fo/init-with-schemas)
  (redefs-around [dispatch/push-to-players! (stub :push-to-players!)])

  (context "ws-start-game"

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
            players (map db/entity (:players @mojave))
            new-game (last (db/find :game))
            new-room (assoc @mojave :game (:id new-game))]
        (should= :ok (:status response))
        (should-have-invoked :push-to-players! {:with [players
                                                       :room/update
                                                       [new-room]]})
        (should-have-invoked :push-to-players! {:with [players
                                                       :game/update
                                                       new-game]}))))

  (context "ws-submit-cards"
    (it "updates game"
      (let [selected-cards (take 3 cardsc/deck)
            old-game @caravan
            response (sut/ws-submit-cards {:connection-id (:conn-id @boone)
                                           :params {:selected-cards selected-cards}})]
        (should= :ok (:status response))
        (should= (gamec/process-card-submission! old-game selected-cards) @caravan)))

    (it "notifies players if selected cards is a set"
      (let [players (map db/entity (:players @mojave))
            selected-cards (take 3 cardsc/deck)
            new-game (gamec/process-card-submission @caravan selected-cards)
            response (sut/ws-submit-cards {:connection-id (:conn-id @boone)
                                           :params {:selected-cards selected-cards}})]
        (should= :ok (:status response))
        (should-have-invoked :push-to-players! {:with [players
                                                       :game/update
                                                       new-game]})))

    (it "doesn't notify players if selected cards is not a set"
      (let [response (sut/ws-submit-cards {:connection-id (:conn-id @boone)
                                           :params {:selected-cards []}})]
        (should= :ok (:status response))
        (should-not-have-invoked :push-to-players!)))))