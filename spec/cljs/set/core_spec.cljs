(ns cljs.set.core-spec
  (:require-macros [speclj.core :refer [describe it should=]])
  (:require [speclj.core]
            [set.core]))

(describe "A ClojureScript test"
  (it "fails. Fix it!"
    (should= 0 1)))
