(ns set.game
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.apic :as apic]
            [set.cardsc :as cardsc]
            [set.dispatch :as dispatch]
            [set.playerc :as playerc]
            [set.roomc :as roomc]
            [set.room :as room]
            [set.gamec :as gamec]))

(defn push-game-to-room! [game room]
  (let [players (map db/entity (:players room))]
    (dispatch/push-to-players! players :game/update game)))

(defn ws-start-game [{:keys [connection-id] :as request}]
  (let [player (playerc/by-conn-id connection-id)
        room (db/ffind-by :room :host (:id player))]
    (if-not room
      (apic/fail nil "Only the host can start the game!")
      (let [room (roomc/start! room)]
        (room/push-room! room)
        (push-game-to-room! (gamec/->game (shuffle cardsc/deck)) room)
        (apic/ok room)))))

(defn ws-submit-cards [{:keys [params connection-id] :as request}]
  )