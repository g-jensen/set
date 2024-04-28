(ns set.state
  (:require [c3kit.bucket.api :as db]
            [reagent.core :as reagent]))

(def game (reagent/track #(db/ffind :game)))
(def nickname (reagent/atom nil))
(def room (reagent/track #(db/ffind :room)))
(def players (reagent/track #(map db/entity (:players @room))))