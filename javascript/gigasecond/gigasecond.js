'use strict';

let Gigasecond = function(date) {
  this.beginDate = date;

  let gigaSec = Math.pow(10, 9);
  this.gigaAnniversary = new Date(this.beginDate);
  this.gigaAnniversary = this.gigaAnniversary
    .setSeconds(this.beginDate.getSeconds() + gigaSec);
};

Gigasecond.prototype.date = function() {
  return new Date(this.gigaAnniversary);
};

module.exports = Gigasecond;
