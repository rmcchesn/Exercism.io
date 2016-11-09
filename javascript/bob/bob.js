//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

let responseLibrary = {
  normal: 'Whatever.',
  shouting: 'Whoa, chill out!',
  expressive: 'Sure.',
};

Bob.prototype.hey = function(input) {
  let responseType = 'normal';

  // console.log('hello', input.match(/[a-z]/gi))

  if (input.toUpperCase() === input && input.match(/[a-z]/gi) !== null) {
    responseType = 'shouting';
  } else if (input.slice(-1) === '?' || input.slice(-1) === '!') {
    responseType = 'expressive';
  }


  return responseLibrary[responseType];
};

module.exports = Bob;
