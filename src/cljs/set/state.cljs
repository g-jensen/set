(ns set.state
  (:require [c3kit.bucket.api :as db]
            [reagent.core :as reagent]
            [set.page :as page]))

(def game (reagent/track #(db/ffind :game)))
(def nickname (reagent/atom nil))
(def room (reagent/track #(db/ffind-by :room :code (:room-code @page/state))))
(def players (reagent/track #(map db/entity (:players @room))))