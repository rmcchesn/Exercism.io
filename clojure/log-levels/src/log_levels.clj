(ns log-levels
  (:require [clojure.string :as str]))

(defn message
  "Takes a string representing a log line
   and returns its message with whitespace trimmed."
  [s]
  (def replaced-s (str/replace s #"\[(.*)\]\:\s" ""))
  (str/trim replaced-s))

(defn log-level
  "Takes a string representing a log line
   and returns its level in lower-case."
  [s]
  (def log-items (re-find #"\[(.*)\]\:\s" s))
  (str/lower-case (get log-items 1)))

(defn reformat
  "Takes a string representing a log line and formats it
   with the message first and the log level in parentheses."
  [s]
  (format "%s (%s)" (message s) (log-level s)))
