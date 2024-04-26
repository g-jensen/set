(ns set.spec-helper
  (:require [c3kit.bucket.api :as db]
            [set.init :as init]
            [c3kit.apron.log :as log]
            [speclj.core :refer :all]))

(log/warn!)
(init/install-legend!)
(init/configure-api!)

