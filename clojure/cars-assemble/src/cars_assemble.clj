(ns cars-assemble)

(def base-cars-per-hour 221)
(def min-per-hr 60)

(defn success-rate [speed]
  (cond (= speed 10) 0.77
        (= speed 9) 0.8
        (>= speed 5) 0.9
        :else 1.0))

(defn production-rate
  "Returns the assembly line's production rate per hour,
   taking into account its success rate"
  [speed]
  (def gross-cars (* speed base-cars-per-hour))
  (* gross-cars (success-rate speed)))

(defn working-items
  "Calculates how many working cars are produced per minute"
  [speed]
  (int (/ (production-rate speed) min-per-hr)))
