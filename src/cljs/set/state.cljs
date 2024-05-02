(ns set.state
  (:require [c3kit.bucket.api :as db]
            [reagent.core :as reagent]))

(def push-count (reagent/atom 0))
(def game (reagent/track #(do @push-count (db/ffind :game))))
(def nickname (reagent/atom nil))