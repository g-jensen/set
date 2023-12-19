(ns set.color-blind
  (:require [reagent.core :as reagent]
            [set.settings :as settings]))

(def color-blind-mode (reagent/cursor settings/state [:color-blind-mode]))

(defn on-toggle-color-blind! []
  (swap! color-blind-mode not))

(defn button []
  [:div
   [:input {:type "checkbox"}]
   [:p "color blind mode"]])