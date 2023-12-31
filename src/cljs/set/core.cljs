(ns set.core
  (:require [reagent.dom :as rd]
            [set.page :as page]
            [accountant.core :as accountant]
            [set.router :as router]
            [set.homepage]
            [set.room]))

(defn ^:export main []
  (router/app-routes)
  (accountant/dispatch-current!)
  (rd/render [page/render @page/page] (.getElementById js/document "app")))

;(main)