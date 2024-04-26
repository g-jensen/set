(ns set.dispatch-spec
  (:require [c3kit.apron.corec :as ccc]
            [c3kit.wire.websocket :as ws]
            [set.dispatch :as sut]
            [speclj.core :refer :all]))

(describe "Dispatch")