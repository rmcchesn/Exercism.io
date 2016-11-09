'use strict';

let Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  return this.year % 4 === 0;
};

module.exports = Year;
