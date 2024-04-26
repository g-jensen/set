(ns set.repl
  (:require
   [set.init :as init]
   [set.main :as main]))

(println "Welcome to the set REPL!")
(println "Initializing")
(init/install-legend!)
(main/start-db)
(require '[c3kit.bucket.api :as db])
