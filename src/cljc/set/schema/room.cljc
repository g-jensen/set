(ns set.schema.room
  (:require [c3kit.apron.schema :as s]))

(def room
  {:kind         (s/kind :room)
   :id           s/id
   :state        {:type :keyword :validate s/present? :message "must be present"}
   :code         {:type :string :validate s/present? :message "must be present"}
   :host         {:type :long}
   :players      {:type :seq :spec {:type :long} :validate s/present? :message "must be present"}
   })

(def all [room])