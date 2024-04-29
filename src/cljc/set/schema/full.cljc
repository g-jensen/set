(ns set.schema.full
  (:require [set.schema.room :as room]
            [set.schema.player :as player]
            [set.schema.game :as game]))

(def full-schema
  [game/game
   room/room
   player/answer
   player/player])
