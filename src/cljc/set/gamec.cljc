(ns set.gamec
  (:require [set.cardsc :as cardsc]
            [c3kit.bucket.api :as db]))

(def playing-card-count 12)

(defn- playing-cards-contains-set? [cards]
  (cardsc/contains-set? (take playing-card-count cards)))

(defn shuffle-until-set [deck shuffle-fn]
  (if (or (playing-cards-contains-set? deck)
          (> (count deck) playing-card-count))
    (->> (shuffle-fn deck)
         (iterate shuffle-fn)
         (filter playing-cards-contains-set?)
         (first))))

(defn reset-cards-and-deck [state deck shuffle-fn]
  (let [shuffled-deck (shuffle-until-set deck shuffle-fn)]
    (as-> state state
          (assoc state :cards (take playing-card-count shuffled-deck))
          (assoc state :deck (drop playing-card-count shuffled-deck)))))

(defn ->game
  ([deck]
   (->game (drop 12 deck) (take 12 deck)))
  ([deck cards]
   (let [game {:kind :game :deck deck :cards cards}]
     (if-not (cardsc/contains-set? cards)
       (reset-cards-and-deck game cardsc/deck shuffle)
       game))))

(defn- handle-invalid-state [{:keys [cards deck] :as game}]
  (if-not (and (cardsc/contains-set? cards) (> (count deck) 3))
    (reset-cards-and-deck game cardsc/deck shuffle)
    game))

(defn- take-from-deck [{:keys [deck] :as game}]
  (assoc game :deck (drop 3 deck)))

(defn- replace-with-map [coll m]
  (map #(get m % %) coll))

(defn- replace-cards [{:keys [deck cards] :as game} selected-cards]
  (assoc game :cards (replace-with-map cards (zipmap selected-cards (take 3 deck)))))

(defn process-card-submission [game selected-cards]
  (if (cardsc/set? selected-cards)
    (-> (replace-cards game selected-cards)
        (take-from-deck)
        (handle-invalid-state))
    game))

(defn process-card-submission! [game selected-cards]
  (db/tx (process-card-submission game selected-cards)))