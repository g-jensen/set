(ns set.ws-transport
  (:require [ring.websocket :as ws]))

(defn- open [request {:keys [on-receive on-close on-open]}]
  {:ring.websocket/listener
   {:on-open    (fn [socket] (on-open socket))
    :on-message (fn [socket message] (on-receive socket message))
    :on-close   (fn [socket code _reason] (on-close socket code))}})

(defn- send! [socket message]
  (ws/send socket message)
  true)

(defn- close [socket]
  (ws/close socket))

(def transport
  {:open  open
   :send! send!
   :close close})
