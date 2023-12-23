(ns css
  (:require [garden.def :as garden]))

(garden/defstyles styles
  [
   [:.main-container {
    :display "grid"
    :grid-template-columns "1fr 1fr 1fr"
   }]

   [:.left-container {
    :float "right"
    :text-align "right"
   }]

   [:.center {
    :display "flex"
    :justify-content "center"
   }]

   [:.color-blind-indicator {
    :position "absolute"
   }]

    [:.card-container {
     :display "grid"
     :grid-template-columns "min-content min-content min-content min-content";
    }]

   [:.card {
    :position "relative"
    :transition "transform .2s"
    :margin "1vw"
    :border-style "solid"
    :border-width "2px"
    :border-color "white"
    }]

   [:.card:hover {
    :transform "scale(1.1)"
    }]

   [:.card-selected {
    :border-color "black"
    }]

   [:.card-selected:hover {
    :transform "none"
    }]

   ])