(ns set.utilc
  (:require [clojure.math.combinatorics :as combo]))

(def bad-shuffle #(conj (vec (rest %)) (first %)))

(def attributes {:color [:red :green :purple]
                 :count [:one :two :three]
                 :shape [:diamond :oval :squiggle]
                 :shade [:open :solid :striped]})

(defn card [color count shape shade]
  {:color color :count count :shape shape :shade shade})

(def deck (for [color (:color attributes)
                count (:count attributes)
                shape (:shape attributes)
                shade (:shade attributes)]
            (card color count shape shade)))

(defn- distinct-or-all-same [vec]
  (or (apply distinct? vec) (apply = vec)))

(defn- values-are-distinct-or-all-same? [m]
  (every? true? (map #(distinct-or-all-same (map % m)) (keys attributes))))

(defn set? [cards]
  (and (= (count cards) 3) (values-are-distinct-or-all-same? cards)))

(defn- combos->set? [cards]
  (map set? (combo/combinations cards 3)))

(defn set-count [cards]
  (count (filter true? (combos->set? cards))))

(defn contains-set? [cards]
  (some true? (combos->set? cards)))

(defn initial-state [deck shuffle-fn]
  (let [shuffled-deck (shuffle-fn deck)
        playing-card-count 12]
    {:cards          (take playing-card-count shuffled-deck)
     :selected-cards []
     :deck           (drop playing-card-count shuffled-deck)
     :src-deck       deck
     :shuffle-fn     shuffle-fn
     :found-sets-count 0}))