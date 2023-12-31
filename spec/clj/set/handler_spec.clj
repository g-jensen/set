(ns set.handler-spec
  (:require [hiccup.page :as page]
            [speclj.core :refer :all]
            [set.handler :as sut]))

(def empty-client-init
  (page/html5
    sut/skeleton
    [:script {:type "text/javascript"}
     "set.core.main(\"[\\\"^ \\\"]\");"]))

(def populated-client-init
  (page/html5
    sut/skeleton
    [:script {:type "text/javascript"}
     "set.core.main(\"[\\\"^ \\\",\\\"~:a\\\",\\\"1\\\"]\");"]))

(describe "Handler"

  (it "initializes client with data"
    (should= empty-client-init (sut/client-init {}))
    (should= populated-client-init (sut/client-init {:a "1"}))))