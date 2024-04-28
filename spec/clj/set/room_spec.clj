(ns set.room-spec
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.apic :as apic]
            [set.fallout :as fo :refer [mojave nipton yes-man boone benny]]
            [set.dispatch :as dispatch]
            [set.playerc :as playerc]
            [set.room :as sut]
            [set.roomc :as roomc]
            [speclj.core :refer :all]))

(def idx (atom 5))

(describe "Room"
  (with-stubs)
  (fo/init-with-schemas)
  (before (reset! idx 5))
  (redefs-around [rand-nth (stub :rand {:invoke (fn [coll]
                                                  (swap! idx inc)
                                                  (nth coll @idx))})])

  (context "room id"

    (it "random 6 numbers/letters"
      (should= "89ABCD" (sut/new-code))))

  (context "ws-create-room"

    (it "success"
      (let [response (sut/ws-create-room {})]
        (should= :ok (:status response))
        (should= ["89ABCD"] (:payload response))))

    (it "does not duplicate room codes"
      (db/tx (roomc/->room "89ABCD"))
      (sut/ws-create-room {})
      (should-not-be-nil (roomc/by-code "EFHJKL"))))

  (context "ws-join-room"
    (redefs-around [dispatch/push-to-players! (stub :push-to-players!)])

    (before (roomc/create-room! "asylum"))

    (it "missing room"
      (let [response (sut/ws-join-room {:params {:nickname "Solaire"}})]
        (should= :fail (:status response))
        (should-be-nil (:payload response))
        (should= "Missing room!" (apic/flash-text response 0))))

    (it "missing nickname"
      (let [response (sut/ws-join-room {:params {:room-code "asylum"}})]
        (should= :fail (:status response))
        (should-be-nil (:payload response))
        (should= "Missing nickname!" (apic/flash-text response 0))))

    (it "room does not exist"
      (let [response (sut/ws-join-room {:params {:nickname "Solaire" :room-code "parish"}})]
        (should= :fail (:status response))
        (should-be-nil (:payload response))
        (should= "Room does not exist!" (apic/flash-text response 0))
        (should-be-nil (playerc/by-nickname "Solaire"))))

    (it "joins room"
      (let [response (sut/ws-join-room {:params        {:nickname "Sewer Rat" :room-code fo/nipton-code}
                                        :connection-id "conn-rat"})]
        (should= :ok (:status response))
        (let [player (playerc/by-nickname "Sewer Rat")]
          (should-not-be-nil player)
          (should= [@nipton player] (:payload response))
          (should= (:id player) (:host @nipton))
          (should= "conn-rat" (:conn-id player)))))

    (it "notifies players of new room state"
      (let [response (sut/ws-join-room {:params        {:nickname "Giant Crow" :room-code fo/mojave-code}
                                        :connection-id "conn-crow"})
            crow     (playerc/by-nickname "Giant Crow")]
        (should= :ok (:status response))
        (should-have-invoked :push-to-players! {:with [(map db/entity (:players @mojave))
                                                       :room/update
                                                       [@mojave crow]]})))

    (it "responds with current room state & all current players"
      (let [response (sut/ws-join-room {:params        {:nickname "Giant Crow" :room-code fo/mojave-code}
                                        :connection-id "conn-crow"})
            crow     (playerc/by-nickname "Giant Crow")]
        (should= :ok (:status response))
        (should= (set [@mojave crow @yes-man @boone @benny]) (set (:payload response))))))

  (context "ws-leave-room"
    (redefs-around [dispatch/push-to-players! (stub :push-to-players!)])

    (it "removes player from room"
      (sut/ws-leave-room {:connection-id "conn-benny"})
      (should-not-contain (:id @benny) (:players @mojave))
      (should= (mapv :id [@yes-man @boone]) (:players @mojave)))

    (it "notifies players of new room state"
      (sut/ws-leave-room {:connection-id "conn-benny"})
      (should-have-invoked :push-to-players! {:with [(map db/entity (:players @mojave))
                                                     :room/update
                                                     [@mojave]]})))

  (context "ws-fetch-room"
    (before (roomc/create-room! "depths"))

    (it "missing room"
      (let [response (sut/ws-fetch-room {:params {}})]
        (should= :fail (:status response))
        (should-be-nil (:payload response))
        (should= "Missing room!" (apic/flash-text response 0))))

    (it "room does not exist"
      (let [response (sut/ws-fetch-room {:params {:room-code "parish"}})]
        (should= :fail (:status response))
        (should-be-nil (:payload response))
        (should= "Room does not exist!" (apic/flash-text response 0))))

    (it "fetches room"
      (let [[_ crow] (:payload (sut/ws-join-room {:params {:nickname "Giant Crow" :room-code fo/nipton-code}}))
            response (sut/ws-fetch-room {:params {:room-code fo/nipton-code}})]
        (should= :ok (:status response))
        (should= [@nipton crow] (:payload response))))))