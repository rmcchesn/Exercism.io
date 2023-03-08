(ns robot-simulator)

(defn robot
  [start-coord start-bearing]
  {:coordinates start-coord :bearing start-bearing})

(def advance
  {
    :north #(update % :y inc)
    :east #(update % :x inc)
    :south #(update % :y dec)
    :west #(update % :x dec)})

(defn turn-left
  [direction]
  (def left-turn {:north :west, :east :north, :south :east, :west :south})
  (get left-turn direction))

(defn turn-right
  [direction]
  (def right-turn {:north :east, :east :south, :south :west, :west :north})
  (get right-turn direction))

(defn step
  [robot command]
  (case command
    \A (update robot :coordinates (advance (:bearing robot)))
    \L (update robot :bearing turn-left)
    \R (update robot :bearing turn-right)))

(defn simulate
  [commands robot]
  (reduce step robot commands))
