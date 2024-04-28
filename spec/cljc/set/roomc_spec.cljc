(ns set.roomc-spec
  (:require [c3kit.bucket.api :as db]
            [set.fallout :as fo :refer [nipton dogmeat boone benny]]
            [set.playerc :as playerc]
            [set.roomc :as sut]
            [speclj.core #?(:clj :refer :cljs :refer-macros) [describe context focus-it it should= should-not-be-nil]]))

(describe "roomc"
  (fo/init-with-schemas)

  (context "create-room!"

    (it "assigns code"
      (sut/create-room! fo/mojave-code)
      (should= fo/mojave-code (:code (db/ffind-by :room :code fo/mojave-code)))))

  (context "add-player"

    (it "to empty room"
      (let [room (sut/add-player {:players []} {:id 123})]
        (should= [123] (:players room))))

    (it "to room with one player"
      (let [room (sut/add-player {:players [123]} 124)]
        (should= [123 124] (:players room))))

    (it "to room with many players"
      (let [room (sut/add-player {:players [123 124]} 125)]
        (should= [123 124 125] (:players room)))))

  (context "join-room!"

    (it "first user to join becomes host"
      (let [response (sut/join-room! @nipton @dogmeat)]
        (should= @nipton response)
        (should= (:id @dogmeat) (:host @nipton))))

    (it "subsequent users joining do not become host"
      (sut/join-room! @nipton @dogmeat)
      (let [crow     (playerc/create-player! "Giant Crow")
            response (sut/join-room! @nipton crow)]
        (should= @nipton response)
        (should= (:id @dogmeat) (:host @nipton))))

    (it "stores users who have joined in order"
      (sut/join-room! @nipton @dogmeat)
      (sut/join-room! @nipton @boone)
      (sut/join-room! @nipton @benny)
      (should= (mapv :id [@dogmeat @boone @benny]) (:players @nipton)))))