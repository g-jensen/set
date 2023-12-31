(ns set.stats
  (:require [set.cards :as cards]
            [set.cardsc :as cardsc]))

(defn stats []
  [:div
   [:h1.no-margin {:id "-found"} (str "Found: " (:found-sets-count @cards/state))]
   [:p.no-margin {:id "-exist"} (str "Exist: " (cardsc/set-count (:cards @cards/state)))]])