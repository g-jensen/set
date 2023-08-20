(ns css
  (:require [garden.def :as garden]))

(garden/defstyles styles
  [
    [:.card-container {
     :display "grid"
     :grid-template-columns "min-content min-content min-content min-content";
    }]

   [:.card {
    :transition "transform .2s"
    :margin "1vw"
    }]

   [:.card:hover {
    :transform "scale(1.1)"
    }]

   ])