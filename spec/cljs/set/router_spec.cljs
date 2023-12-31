(ns set.router-spec
  (:require-macros [set.spec-helperc :refer [it-routes]]
                   [speclj.core :refer [redefs-around describe context it should-not-be-nil should-be-nil should= should-not should-not= should-have-invoked after before with-stubs with around stub should-contain should-not-contain should before-all]])
  (:require [speclj.core]
            [set.page :as page]
            [set.router :as router]
            [secretary.core :as secretary]))

(describe "Router"
  (with-stubs)
  (before (page/clear!)
          (secretary/reset-routes!)
          (router/app-routes))

  (it-routes "/" :homepage)
  (it-routes "/room/1234" :room
             (should= "1234" (:link @page/room))))