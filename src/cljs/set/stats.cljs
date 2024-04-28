(ns set.stats
  (:require [set.cardsc :as cardsc]))

(defn stats [state-ratom]
  [:div
   [:h1.no-margin {:id "-found"} (str "Found: " (:found-sets-count @state-ratom))]
   [:p.no-margin {:id "-exist"} (str "Exist: " (cardsc/set-count (:cards @state-ratom)))]])