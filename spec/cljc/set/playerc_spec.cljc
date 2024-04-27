(ns set.playerc_spec
  (:require [set.playerc :as sut]
            [set.fallout :as fo]
            [speclj.core #?(:clj :refer :cljs :refer-macros) [describe context it should=]]))

(describe "playerc"
  (fo/with-schemas)

  (it "constructor"
    (let [player (sut/->player "Yes Man" "conn-id")]
      (should= "Yes Man" (:nickname player))
      (should= "conn-id" (:conn-id player))))

  (context "create-player!"

    (it "assigns nickname"
      (sut/create-player! "Solaire")
      (should= "Solaire" (:nickname (sut/by-nickname "Solaire"))))

    (it "assigns conn-id"
      (sut/create-player! "Solaire" "conn-solaire")
      (should= "conn-solaire" (:conn-id (sut/by-nickname "Solaire")))))

  (context "or-id"

    (it "player"
      (should= 123 (sut/or-id {:id 123})))

    (it "id"
      (should= 123 (sut/or-id 123)))))