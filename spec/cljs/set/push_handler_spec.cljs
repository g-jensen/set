(ns set.push-handler-spec
  (:require-macros [speclj.core :refer [should-not= around stub should-have-invoked should-not-have-invoked with-stubs describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require [c3kit.bucket.api :as db]
            [c3kit.wire.websocket :as ws]
            [set.cardsc :as cardsc]
            [set.fallout :as fo]
            [set.game :as game]
            [set.gamec :as gamec]
            [set.playerc :as playerc]
            [set.spec-helperc :as sut]))

(describe "push handler"
  (fo/with-schemas)
  (before (db/clear))

  (context "room/update"
    (it "db/tx*'s params"
      (let [player (playerc/->player "Yes Man")]
        (should= [] (db/find :player))
        (ws/push-handler {:kind :room/update :params [player]})
        (should= [player] (mapv #(dissoc % :id) (db/find :player))))))

  (context "game/update"
    (it "db/tx's params"
      (let [game (gamec/->game cardsc/deck)]
        (should= [] (db/find :game))
        (ws/push-handler {:kind :game/update :params game})
        (should= [game] (mapv #(dissoc % :id) (db/find :game)))))

    (it "clears selected cards"
      (let [game (gamec/->game cardsc/deck)]
        (game/select-card! game/state (first cardsc/deck))
        (game/select-card! game/state (second cardsc/deck))
        (should= (take 2 cardsc/deck) (:selected-cards @game/state))
        (ws/push-handler {:kind :game/update :params game})
        (should= [] (:selected-cards @game/state))))))