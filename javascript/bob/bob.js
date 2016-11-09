//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

let responseLibrary = {
  normal: 'Whatever.',
  shouting: 'Whoa, chill out!',
  expressive: 'Sure.',
  silent: 'Fine. Be that way!'
};

Bob.prototype.hey = function(input) {
  let responseType = 'normal';

  if (input.match(/\S/g) === null) {
    responseType = 'silent';

  } else if (input.toUpperCase() === input && input.match(/[a-z]/gi) !== null) {
    responseType = 'shouting';

  } else if (input.slice(-1) === '?' || input.slice(-1) === '!') {
    responseType = 'expressive';
  }


  return responseLibrary[responseType];
};

module.exports = Bob;
