'use strict';

let validatePhone = function(input) {
  let re = /\D/g;
  let phoneNum = '0000000000';

  let digits = input.replace(re, '');

  if (digits.length === 10) {
    phoneNum = digits;
  }

  return phoneNum;
};

let PhoneNumber = function(input) {
  this.phone = validatePhone(input);
};

PhoneNumber.prototype.number = function() {
  return this.phone;
};

module.exports = PhoneNumber;
