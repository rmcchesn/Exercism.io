'use strict';

let Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  let isALeap = false;

  if (this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0)) {
    isALeap = true;
  }

  return isALeap;
};

module.exports = Year;
