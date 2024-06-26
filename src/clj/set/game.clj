(ns set.game
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.apic :as apic]
            [set.cardsc :as cardsc]
            [set.dispatch :as dispatch]
            [set.playerc :as playerc]
            [set.roomc :as roomc]
            [set.room :as room]
            [set.gamec :as gamec]))

(def max-set-count 27)

(defn push-game-to-room! [game room]
  (let [players (map db/entity (:players room))]
    (dispatch/push-to-players! players :game/update game)))

(defn ws-start-game [{:keys [connection-id] :as request}]
  (let [player (playerc/by-conn-id connection-id)
        room (db/ffind-by :room :host (:id player))]
    (if-not room
      (apic/fail nil "Only the host can start the game!")
      (let [game (gamec/create-game! (shuffle cardsc/deck))
            room (roomc/assign-game-to-room! game (roomc/start room))]
        (room/push-room! room)
        (push-game-to-room! game room)
        (apic/ok room)))))

(defn maybe-back-to-lobby! [room game]
  (when (>= (:found-sets-count game) max-set-count)
    (push-game-to-room! (db/delete game) room)
    (room/push-room! (db/tx (assoc room :state :lobby)))))

(defn ws-submit-cards [{:keys [params connection-id] :as request}]
  (let [player (playerc/by-conn-id connection-id)
        room (roomc/by-player player)
        game (db/ffind-by :game :id (:game room))
        selected-cards (:selected-cards params)
        updated-game (gamec/process-card-submission! game selected-cards)]
    (when (cardsc/set? selected-cards)
      (push-game-to-room! updated-game room)
      (room/push-to-room! room [(db/tx (update player :points inc))]))
    (maybe-back-to-lobby! room updated-game)
    (apic/ok)))