(ns set.stats
  (:require [set.cards :as cards]
            [set.cardsc :as cardsc]))

(defn stats []
  [:div {:id "-stats"}
   (str "found: " (:found-sets-count @cards/state) " "
        "exist: " (cardsc/set-count (:cards @cards/state)))])