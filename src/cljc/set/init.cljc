(ns set.init
  (:require #?(:cljs [set.core :as core])
            #?(:cljs [set.page :as page])
            #?(:cljs [reagent.core :as reagent])
            [c3kit.apron.legend :as legend]
            [c3kit.bucket.api :as db]
            [c3kit.bucket.memory]
            [c3kit.wire.api :as api]
            [set.config :as config]
            [set.schema.full :as schema]
            [set.schema.player :as player]
            [set.schema.room :as room]))

(defn install-legend! []
  (legend/init! {:room       room/room
                 :answer     player/answer
                 :player     player/player
                 :db/retract legend/retract
                 }))

#?(:cljs (defn install-reagent-db-atom! []
           (db/set-impl! (db/create-db config/bucket schema/full-schema))))

(defn configure-api! []
  (api/configure! #?(:clj  {:ws-handlers 'set.routes/ws-handlers
                            :version     (api/version-from-js-file (if config/development? "public/cljs/set_dev.js" "public/cljs/set.js"))}
                     :cljs {:redirect-fn       core/goto!
                            })))
