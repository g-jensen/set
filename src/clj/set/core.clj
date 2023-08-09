(ns set.core)

(defn- distinct-or-all-same [vec]
  (or (apply distinct? vec) (apply = vec)))

(defn- values-are-distinct-or-all-same? [m]
  (every? true? (map #(distinct-or-all-same (map % m)) (keys (first m)))))

(defn set? [cards]
  (and (= (count cards) 3) (values-are-distinct-or-all-same? cards)))