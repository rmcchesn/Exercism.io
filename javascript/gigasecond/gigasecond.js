'use strict';

const gigaSec = Math.pow(10, 12); // in milliseconds

let Gigasecond = function(dateInput) {
  this.startDate = dateInput;
};

Gigasecond.prototype.date = function() {
  return new Date(this.startDate.getTime() + gigaSec);
};

module.exports = Gigasecond;
