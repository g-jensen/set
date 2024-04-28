(ns set.schema.game
  (:require [c3kit.apron.schema :as s]))

(def card
  {:kind  (s/kind :card)
   :color {:type :keyword :validate s/present? :message "must be present"}
   :count {:type :keyword :validate s/present? :message "must be present"}
   :shape {:type :keyword :validate s/present? :message "must be present"}
   :shade {:type :keyword :validate s/present? :message "must be present"}
   })

(def game
  {:kind              (s/kind :game)
   :id                s/id
   :cards             {:type :seq :spec {:type :any} :validate s/present? :message "must be present"}
   :deck              {:type :seq :spec {:type :any} :validate s/present? :message "must be present"}
   })

(def all [game card])
