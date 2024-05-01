(ns set.roomc
  (:require [c3kit.bucket.api :as db]
            [set.playerc :as playerc]))

(defn ->room [code]
  {:kind    :room
   :code    code
   :state   :lobby
   :players []})

(defn create-room! [code]
  (let [code code
        room (->room code)]
    (db/tx room)))

(defn add-player [{:keys [players] :as room} player]
  (let [id      (playerc/or-id player)
        players (conj players id)]
    (assoc room :players players)))

(defn add-player! [room player]
  (db/tx (add-player room player)))

(defn start [room]
  (assoc room :state :started))

(defn remove-player [{:keys [players] :as room} player]
  (let [id (playerc/or-id player)
        players (remove #{id} players)]
    (assoc room :players players)))

(defn remove-player! [room player]
  (db/tx (remove-player room player)))

(defn join-room! [room player]
  (let [room   (add-player room player)]
    (if (not (:host room))
      (db/tx (assoc room :host (playerc/or-id player)))
      (db/tx room))))

(defn leave-room! [room player]
  (let [room (remove-player room player)
        host (first (:players room))
        room (assoc room :host host)]
    (db/tx room)))

(defn or-id [player-or-id]
  ((some-fn :id identity) player-or-id))

(defn by-code [code]
  (db/ffind-by :room :code code))
(defn by-player [player]
  (db/ffind :room :where {:players [(playerc/or-id player)]}))