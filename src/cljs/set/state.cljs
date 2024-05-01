(ns set.state
  (:require [c3kit.bucket.api :as db]
            [reagent.core :as reagent]
            [set.page :as page]))

(def game (reagent/track #(db/ffind :game)))
(def nickname (reagent/atom nil))