(ns set.push-handler
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.core.websocket :as ws]
            [set.game :as game]
            [set.state :as state]))

(defmethod ws/push-handler :room/update [_state push]
  (db/tx* (:params push))
  (swap! state/push-count inc))

(defmethod ws/push-handler :game/update [_state push]
  (swap! game/state assoc :selected-cards [])
  (db/tx (:params push))
  (swap! state/push-count inc))
