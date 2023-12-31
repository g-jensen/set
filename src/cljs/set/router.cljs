(ns set.router
  (:require-macros [secretary.core :refer [defroute]])
  (:require [accountant.core :as accountant]
            [secretary.core :as secretary]
            [c3kit.apron.log :as log]
            [set.page :as page]))

(defn dispatch! [uri]
  (log/debug "dispatching: " uri)
  (secretary/dispatch! uri))

(defn locate-route [route]
  (let [result (secretary/locate-route route)]
    (log/debug "locate-route: " route " -> " result)
    result))

(defn- hook-browser-navigation! []
  (accountant/configure-navigation! {:nav-handler dispatch! :path-exists? locate-route}))

(defn- exit-enter-page [page]
  (let [current-page (:page @page/state)]
    (when-not (= current-page page)
      (log/debug "leaving page:" current-page)
      (page/leaving! current-page)
      (log/debug "entering page:" page)
      (page/entering! page))))

(defn load-page! [page]
  (exit-enter-page page)
  (.scrollTo js/window 0 0)
  (page/install-page! page))

(defn app-routes []
  (secretary/set-config! :prefix "")

  (defroute "/" [] (load-page! :homepage))
  (defroute "/room/:link" [link]
    (load-page! :room)
    (swap! page/room assoc :link link))

  (hook-browser-navigation!))