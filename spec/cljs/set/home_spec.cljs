(ns set.home-spec
  (:require-macros [speclj.core :refer [around stub should-have-invoked should-not-have-invoked with-stubs describe context it should= should-be-nil should-contain should should-not before should-not-be-nil]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require [accountant.core :as accountant]
            [c3kit.apron.corec :as ccc]
            [c3kit.wire.spec-helper :as wire]
            [set.home :as sut]
            [set.state :as state]))

(defn stub-navigate! []
  (around [it]
          (with-redefs [accountant/navigate! (stub :redirect!)]
            (it))))

(describe "Home"
  (with-stubs)
  (wire/stub-ws)
  (wire/with-root-dom)
  (before (reset! state/nickname nil))

  (context "nickname input"
    (before (wire/render [sut/home state/nickname]))

    (it "exists"
      (should-select "#-nickname-input"))

    (context "has a value"
      (it "is blank at first"
        (should= "" (wire/value "#-nickname-input")))

      (it "updates nickname on change"
        (wire/change! "#-nickname-input" "Benny")
        (should= "Benny" @state/nickname))))

  (context "join room"
    (stub-navigate!)
    (context "with nickname and code"
      (it "Yes Man, ABC123"
        (reset! state/nickname "Yes Man")
        (sut/join-room! ["ABC123"])
        (should-have-invoked :ws/call! {:with [:room/join
                                               {:nickname "Yes Man" :room-code "ABC123"}
                                               ccc/noop]})
        (should-have-invoked :redirect! {:with ["/room/ABC123"]}))

      (it "Boone, KX29L1"
        (reset! state/nickname "Boone")
        (sut/join-room! ["KX29L1"])
        (should-have-invoked :ws/call! {:with [:room/join
                                               {:nickname "Boone" :room-code "KX29L1"}
                                               ccc/noop]})
        (should-have-invoked :redirect! {:with ["/room/KX29L1"]}))))

  (context "create room button"
    (before (wire/render [sut/home state/nickname]))

    (it "exists"
      (should-select "#-create-room-button"))

    (context "on click"
      (context "creates room and then joins room"
        (it "with nickname Dogmeat"
          (reset! state/nickname "Dogmeat")
          (wire/click! "#-create-room-button")
          (should-have-invoked :ws/call! {:with [:room/create
                                                 {:nickname "Dogmeat"}
                                                 sut/join-room!]}))

        (it "with nickname Boone"
          (reset! state/nickname "Boone")
          (wire/click! "#-create-room-button")
          (should-have-invoked :ws/call! {:with [:room/create
                                                 {:nickname "Boone"}
                                                 sut/join-room!]})))

      (context "does nothing if nickname"
        (it "is nil"
          (reset! state/nickname nil)
          (wire/click! "#-create-room-button")
          (should-not-have-invoked :ws/call!))

        (it "is empty"
          (reset! state/nickname "")
          (wire/click! "#-create-room-button")
          (should-not-have-invoked :ws/call!))

        (it "is blank"
          (reset! state/nickname " ")
          (wire/click! "#-create-room-button")
          (should-not-have-invoked :ws/call!))))))