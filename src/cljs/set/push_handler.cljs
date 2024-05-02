(ns set.push-handler
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.websocket :as ws]
            [set.game :as game]))

(defmethod ws/push-handler :room/update [push]
  (db/tx* (:params push)))

(defmethod ws/push-handler :game/update [push]
  (swap! game/state assoc :selected-cards [])
  (db/tx (:params push)))