(ns set.singleplayer-spec
  (:require-macros [speclj.core :refer [around stub should-have-invoked should-not-have-invoked with-stubs describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require [c3kit.apron.corec :as ccc]
            [c3kit.bucket.api :as db]
            [c3kit.wire.spec-helper :as wire]
            [set.cardsc :as cardsc]
            [set.cardsc-spec :as cardsc-spec]
            [set.fallout :as fo]
            [set.gamec :as gamec]
            [set.singleplayer :as sut]
            [set.page :as page]))

(describe "singleplayer"
  (fo/with-schemas)
  (cardsc-spec/with-bad-shuffle)

  (it "creates a new game upon entering"
    (should-be-nil (db/ffind :game))
    (page/entering! :singleplayer)
    (let [game (db/ffind :game)]
      (should= (assoc (gamec/->game (shuffle cardsc/deck)) :id (:id game))
               game))))