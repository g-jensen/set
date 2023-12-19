(ns set.settings
  (:require [reagent.core :as reagent]))

(def initial-state {:color-blind-mode false})

(def state (reagent/atom initial-state))