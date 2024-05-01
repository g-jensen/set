(ns set.room
  (:require [c3kit.apron.corec :as ccc]
            [c3kit.wire.websocket :as ws]
            [clojure.string :as str]
            [reagent.core :as reagent]
            [set.cardsc :as cardsc]
            [set.page :as page]
            [c3kit.bucket.api :as db]
            [c3kit.wire.util :as util]))

(def state (page/cursor [:room] {}))
(defn install-room! [code]
  (swap! state assoc :code code))
(def code (reagent/track #(:code @state)))
(def room (reagent/track #(db/ffind :room :code @code)))
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
  (prn "join")
  (ws/call! :room/join
            {:nickname "new user" :room-code (:room-code @page/state)}
            db/tx*))

(defn full-room [room-ratom players-ratom]
  [:div.main-container
   [:div.left-container
    [:br]
    [:br]
    [:div
     {:id "-players"}
     [:h3 "Players"]
     [:ul
      [:<>
       (util/with-react-keys
         (ccc/for-all [player @players-ratom]
                      [:li {:id (str "-player-" (:id player))}
                       (str (:nickname player) (when (host? @room-ratom player) " (Host)"))]))]]]]
   [:div.center
    [:div.game-container
     [:p (str @room-ratom)]
     [:h1.text-align-center "Set"]
     [:<>
      [:h2.center.categories-data "Waiting for host to start game..."]
      (how-to-play)
      [:div.center
       [:button {:on-click join-room!}
        "Start Game"]]]]]])

(defn fetch-room! []
  (ws/call! :room/fetch
            {:room-code @code}
            db/tx*))

(defmethod page/entering! :room [_]
  (fetch-room!))

(defmethod page/render :room [_]
  [full-room room players])