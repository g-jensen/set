(ns set.push-handler
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.websocket :as ws]
            [reagent.core :as reagent]
            [set.game :as game]
            [set.state :as state]))

(defmethod ws/push-handler :room/update [push]
  (db/tx* (:params push))
  (reagent/rswap! state/push-count inc))

(defmethod ws/push-handler :game/update [push]
  (swap! game/state assoc :selected-cards [])
  (db/tx (:params push))
  (reagent/rswap! state/push-count inc))