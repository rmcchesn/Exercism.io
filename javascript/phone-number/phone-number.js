'use strict';

let validatePhone = function(input) {
  let re = /\D/g;
  let phoneNum = '0000000000';

  let digits = input.replace(re, '');

  if (digits.length === 10) {
    phoneNum = digits;
  } else if (digits.length === 11 && digits[0] === '1') {
    phoneNum = digits.slice(1);
  }

  return phoneNum;
};

let PhoneNumber = function(input) {
  this.phone = validatePhone(input);
};

PhoneNumber.prototype.number = function() {
  return this.phone;
};

PhoneNumber.prototype.areaCode = function() {
  return this.phone.slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
  return `(${this.areaCode()}) ` +
      `${this.phone.slice(3, 6)}-` +
      `${this.phone.slice(6)}`;
};

module.exports = PhoneNumber;
