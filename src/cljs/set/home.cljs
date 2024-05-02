(ns set.home
  (:require [accountant.core :as accountant]
            [c3kit.apron.corec :as ccc]
            [c3kit.wire.js :as wjs]
            [c3kit.wire.websocket :as ws]
            [clojure.string :as str]
            [set.page :as page]
            [set.state :as state]))

(defn join-room! [[code]]
  (ws/call! :room/join {:nickname @state/nickname :room-code code} ccc/noop)
  (accountant/navigate! (str "/room/" code)))

(defn- create-room! [nickname]
  (when-not (str/blank? nickname)
    (ws/call! :room/create {:nickname nickname} join-room!)))

(defn home [nickname-ratom]
  [:div
   [:h1.text-align-center "Welcome to Set"]
   [:div.center
    [:button {:id "-singleplayer-button"
              :on-click #(accountant/navigate! "/singleplayer")}
     "Singleplayer"]]
   [:br]
   [:div.center
    [:input {:type        "text"
             :id          "-nickname-input"
             :placeholder "Enter your nickname"
             :on-change   #(reset! nickname-ratom (wjs/e-text %))}]]
   [:div.center
    [:button {:id       "-create-room-button"
              :on-click #(create-room! @nickname-ratom)}
     "Create Room"]]])

(defmethod page/render :home [_]
  [home state/nickname])