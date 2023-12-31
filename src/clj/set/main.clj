(ns set.main
  (:require [c3kit.apron.log :as log]
            [c3kit.wire.api :as api]
            [c3kit.wire.websocket :as ws]
            [c3kit.apron.app :as app]
            [org.httpkit.server :refer [run-server]]
            [set.handler :as handler]))

(defn start [app]
  (let [port (if-let [port-str (System/getenv "PORT")] (Integer/parseInt port-str) 8080)]
    (log/info (str "Starting HTTP server: http://localhost:" port))
    (->> (run-server handler/web-handler {:port port})
         (assoc app :http))))

(defn stop [app]
  (when-let [stop-server-fn (:http app)]
    (log/info "Stopping HTTP server")
    (stop-server-fn :timeout 1000))
  (dissoc app :http))

(def http (app/service 'set.main/start 'set.main/stop))

(defn -main [& args]
  (println "hi")
  (api/configure! {:ws-handlers {:test #(prn "test handler")}})
  (app/start! [http ws/service]))