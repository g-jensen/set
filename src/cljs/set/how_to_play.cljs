(ns set.how-to-play
  (:require [set.cardsc :as cardsc]))

(defn how-to-play []
  [:div
   {:id "-how-to-play"}
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