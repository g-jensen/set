(ns set.schema.full
  (:require [set.schema.room :as room]
            [set.schema.player :as player]))

(def full-schema
  [room/room
   player/answer
   player/player])
