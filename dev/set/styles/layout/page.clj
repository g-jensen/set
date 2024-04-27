(ns set.styles.layout.page
  (:refer-clojure :exclude [rem])
  (:require [set.styles.core :refer :all]))

(def screen
(list

#_[:#app-root :#content {
  :height "100%"
}]

#_[:#content {
  :display "flex"
  :flex-direction "column"
  :min-height "100vh"
  :height "auto"
  :width "100%"
  :outline "none"
}]

#_[:header {
  :border-bottom [[(px 1) "solid" light-grey]]
  }

  [:.logo {
    :height (px 44)
  }]

  [:.logo:hover {
    :opacity 0.6
  }]
]

#_[:main {
  :flex 1
}]

#_[:section {
  :position "relative"
  :width "100%"
}]

[:.main-container {:display "grid"
                   :grid-template-columns "1fr 1fr 1fr"}]

[:.left-container {:float "right"
                   :text-align "right"}]

[:.center {:display "flex"
           :justify-content "center"}]

[:.color-blind-indicator {:text-align "center"}]

[:.card-container {:display "grid"
                   :grid-template-columns "min-content min-content min-content min-content";
                   }]

[:.card {:position "relative"
         :transition "transform .2s"
         :margin "1vw"
         :border-style "solid"
         :border-width "2px"
         :border-color "white"}]

[:.card:hover {:transform "scale(1.1)"}]

[:.card-selected {:border-color "black"}]

[:.card-selected:hover {:transform "none"}]

[:.code-input {:max-width "100px"}]

[:.no-margin {:margin "0px"}]

))
