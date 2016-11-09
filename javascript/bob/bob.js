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

  if (input.toUpperCase() === input) {
    responseType = 'shouting';
  } else if (input.slice(-1) === '?' || input.slice(-1) === '!') {
    // console.log('here', input)
    responseType = 'expressive';
  }


  return responseLibrary[responseType];
};

module.exports = Bob;
