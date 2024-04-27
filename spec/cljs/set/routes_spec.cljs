(ns set.routes-spec
  (:require-macros [set.spec-helperc :refer [it-routes]]
                   [speclj.core :refer [around before context describe it should= stub with-stubs]])
  (:require [set.page :as page]
            [set.routes :as sut]
            [secretary.core :as secretary]
            [speclj.core]))

(describe "Routes"
  (with-stubs)
  (before (page/clear!)
    (secretary/reset-routes!)
    (sut/app-routes))

  (around [it] (with-redefs [sut/load-page! (stub :load-page!)] (it)))

  (it-routes "/" :home)
  (it-routes "/room/shrine" :room
             (should= "shrine" (:room-code @page/state)))
  (it-routes "/room/nipton" :room
             (should= "nipton" (:room-code @page/state)))
  )