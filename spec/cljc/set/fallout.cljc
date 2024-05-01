(ns set.fallout
  (:require [c3kit.bucket.api :as db]
            [c3kit.bucket.spec-helperc :as helperc]
            [set.playerc :as playerc]
            [set.roomc :as roomc]
            [set.gamec :as gamec]
            [set.cardsc :as cardsc]
            [set.schema.room :as room.schema]
            [set.schema.player :as player.schema]
            [set.schema.game :as game.schema]
            [speclj.core #?(:clj :refer :cljs :refer-macros) [before]])
  #?(:clj (:import (clojure.lang IDeref))))

(def schemas [room.schema/all
              player.schema/all
              game.schema/all])

(def mojave-code "mojave")
(def nipton-code "nipton")

(def mojave-atom (atom nil))
(def yes-man-atom (atom nil))
(def boone-atom (atom nil))
(def benny-atom (atom nil))
(def dogmeat-atom (atom nil))
(def nipton-atom (atom nil))
(def caravan-atom (atom nil))

(deftype Entity [atm]
  #?(:clj IDeref :cljs cljs.core/IDeref)
  (#?(:clj deref :cljs -deref) [this] (db/reload @atm)))

(def mojave (Entity. mojave-atom))                          ;; a populated room
(def yes-man (Entity. yes-man-atom))                        ;; a player at mojave
(def boone (Entity. boone-atom))                            ;; a player at mojave
(def benny (Entity. benny-atom))                            ;; a player at mojave
(def dogmeat (Entity. dogmeat-atom))                        ;; a player who hasn't joined
(def nipton (Entity. nipton-atom))                          ;; an empty room
(def caravan (Entity. caravan-atom))                        ;; a game

(defn init []
  (reset! mojave-atom (roomc/create-room! mojave-code))
  (reset! nipton-atom (roomc/create-room! nipton-code))
  (reset! yes-man-atom (db/tx (playerc/->player "Yes Man" "conn-yes-man")))
  (reset! boone-atom (db/tx (playerc/->player "Boone" "conn-boone")))
  (reset! benny-atom (db/tx (playerc/->player "Benny" "conn-benny")))
  (reset! dogmeat-atom (db/tx (playerc/->player "Dogmeat" "conn-dogmeat")))
  (reset! caravan-atom (db/tx (gamec/->game cardsc/deck)))
  (roomc/add-player! @mojave @yes-man)
  (roomc/add-player! @mojave @boone)
  (roomc/add-player! @mojave @benny))

(defn with-schemas
  ([] (with-schemas schemas))
  ([& schemas] (helperc/with-schemas schemas)))

(defn init-with-schemas []
  (list (with-schemas)
        (before (init))))