//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

let HelloWorld = function() {};

HelloWorld.prototype.hello = (input) => {
  return input ? `Hello, ${input}!` : 'Hello, World!'
};

module.exports = HelloWorld;
