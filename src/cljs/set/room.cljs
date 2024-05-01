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
            [set.playerc :as playerc]))

(def state (page/cursor [:room] {}))
(defn install-room! [code]
  (swap! state assoc :code code))
(def code (reagent/track #(:code @state)))
(def room (reagent/track #(db/ffind-by :room :code @code)))
(def players (reagent/track #(map db/entity (:players @room))))

(defn- how-to-play []
  [:<>
   [:h3.center "How to play"]
   [:p.text-align-center "Set is a card game in which 12 cards are dealt and the goal is to race against others to find groups of 3 cards that have a specific property that make them a 'set.'"]
   [:p.text-align-center "Each card has four attributes with three options each:" [:b " color "] "(red, green, purple)," [:b " count "] "(1, 2, 3)," [:b " shape "] "(oval, diamond, squiggle), and" [:b " shade "] "(open, striped, solid). "]
   [:p.text-align-center "3 cards make a set if each of the four attributes between the cards are either " [:u "all the same"] [:b " or "] [:u "all different"] "."]
   [:p.text-align-center "Here is an example of 3 cards that make a set:"]
   [:div.center
    [:img {:src (cardsc/card->path (cardsc/card :red :one :oval :open))}]
    [:img {:src (cardsc/card->path (cardsc/card :green :two :diamond :striped))}]
    [:img {:src (cardsc/card->path (cardsc/card :purple :three :squiggle :solid))}]]
   [:p.text-align-center "because all of the attributes are all different."]
   [:p.text-align-center "Here is an example of 3 cards that do" [:b " NOT "] "make a set:"]
   [:div.center
    [:img {:src (cardsc/card->path (cardsc/card :purple :two :diamond :solid))}]
    [:img {:src (cardsc/card->path (cardsc/card :green :one :squiggle :striped))}]
    [:img {:src (cardsc/card->path (cardsc/card :green :three :oval :open))}]]
   [:p.text-align-center "because the color is not all the same or all different (two are the same while one is different)."]
   [:p.text-align-center "For good measure, here is another example of 3 cards that" [:b " do "] "make a set:"]
   [:div.center
    [:img {:src (cardsc/card->path (cardsc/card :red :one :diamond :solid))}]
    [:img {:src (cardsc/card->path (cardsc/card :red :two :diamond :solid))}]
    [:img {:src (cardsc/card->path (cardsc/card :red :three :diamond :solid))}]]
   [:p.text-align-center "This is a set because the" [:b " colors "] "are " [:u "all the same"] ", the" [:b " counts "] "are " [:u "all different"] ", the" [:b " shapes "] "are " [:u "all the same"] ", and the" [:b " shades "] "are " [:u "all the same"] "."]])

(defn- host? [room player]
  (= (:id player) (:host room)))

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
                     (str (:nickname player) (when (host? @room-ratom player) " (Host)"))]))]]])

(defn full-room [room-ratom players-ratom]
  [:div.main-container
   {:id "-room"}
   [:div.left-container
    [:br]
    [:br]
    [full-players room-ratom players-ratom]]
   [:div.center
    [:div.game-container
     [:h1.text-align-center "Set"]
     [:<>
      [:h2.center.categories-data "Waiting for host to start game..."]
      (how-to-play)
      [:div.center
       [:button "Start Game"]]]]]])

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

(defn get-me []
  (when ws/client
    (playerc/by-conn-id (:id (:connection @ws/client)))))

(defn- lobby? [room]
  (= :lobby (:state room)))

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