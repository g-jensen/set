(ns set.room
  (:require [set.page :as page]))

(defmethod page/render :room [_]
  [:h1 (str "this is room: " @page/room)])