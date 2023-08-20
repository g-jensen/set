(ns css
  (:require [garden.def :as garden]))

(garden/defstyles styles
  [
    [:.card-container {
     :display "grid"
     :grid-template-columns "auto auto auto auto";
    }]


   ])