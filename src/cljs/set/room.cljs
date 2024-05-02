(ns set.room
  (:require [c3kit.apron.corec :as ccc]
            [c3kit.wire.js :as wjs]
            [c3kit.wire.websocket :as ws]
            [clojure.string :as str]
            [reagent.core :as reagent]
            [set.cardsc :as cardsc]
            [set.page :as page]
            [c3kit.bucket.api :as db]
            [c3kit.wire.util :as util]
            [set.state :as state]
            [set.playerc :as playerc]
            [set.how-to-play :as htp]))

(def state (page/cursor [:room] {}))
(defn install-room! [code]
  (swap! state assoc :code code))
(def code (reagent/track #(:code @state)))
(def room (reagent/track #(db/ffind-by :room :code @code)))
(def players (reagent/track #(map db/entity (:players @room))))

(defn- host? [room player]
  (= (:id player) (:host room)))

(defn get-me []
  (when ws/client
    (playerc/by-conn-id (:id (:connection @ws/client)))))

(defn- lobby? [room]
  (= :lobby (:state room)))

(defn- join-room! []
  (when-not (str/blank? @state/nickname)
    (ws/call! :room/join
              {:nickname @state/nickname :room-code @code}
              db/tx*)))

(defn full-players [room-ratom players-ratom]
  [:div
   {:id "-players"}
   [:h3 "Players"]
   [:ul
    [:<>
     (util/with-react-keys
       (ccc/for-all [player @players-ratom]
                    [:li {:id (str "-player-" (:id player))}
                     (str (:nickname player) (when (host? @room-ratom player) " (Host)") " | " (:points player))]))]]])

(defn start-button []
  [:div.center
   [:button {:id "-start-button"
             :on-click #(ws/call! :game/start {} db/tx)}
    "Start Game"]])

(defn waiting [room-ratom]
  [:<>
   [:h1.text-align-center "Set"]
   [:h2.center.categories-data "Waiting for host to start game..."]
   (htp/how-to-play)
   (when (host? @room-ratom (get-me))
     [start-button room-ratom])])

(defn full-room [room-ratom players-ratom]
  [:div.main-container
   {:id "-room"}
   [:div.left-container
    [:br]
    [:br]
    [full-players room-ratom players-ratom]]
   [:div.center
    [:div.game-container
     [:p (str @room-ratom)]
     [waiting room-ratom]]]])

(defn nickname-prompt [_]
  (let [local-nickname-ratom (reagent/atom nil)]
    (fn [nickname-ratom]
      [:div.center-div.margin-top-plus-5
       {:id "-nickname-prompt"}
       [:h1.text-align-center "Enter nickname to join room..."]
       [:div.center
        [:input {:type "text"
                 :id "-nickname-input"
                 :placeholder "Enter your nickname"
                 :value @local-nickname-ratom
                 :on-change #(reset! local-nickname-ratom (wjs/e-text %))}]
        [:button {:id       "-join-button"
                  :on-click #(do (reset! nickname-ratom @local-nickname-ratom)
                                 (join-room!))}
         "Join"]]])))

(defn nickname-prompt-or-room [nickname-ratom]
  [:div {:id "-prompt-or-room"}
   (if (str/blank? @nickname-ratom)
     [nickname-prompt nickname-ratom]
     [full-room room players])])

(defn maybe-render-room [room-ratom]
  (cond
    (not @room-ratom)
      [:h1 {:id "-room-not-found"} "Room not found!"]
    (or (lobby? @room-ratom) (get-me))
      [nickname-prompt-or-room state/nickname]
    :else
      [:h1 {:id "-room-started"} "Room as already started. Try joining back later."]))

(defn fetch-room! []
  (ws/call! :room/fetch
            {:room-code @code}
            db/tx*))

(defmethod page/entering! :room [_]
  (fetch-room!))

(defmethod page/render :room [_]
  [maybe-render-room room])