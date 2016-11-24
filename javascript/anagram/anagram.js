'use strict';

let Anagram = function(mainWord) {
  this.mainWord = mainWord;
};

Anagram.prototype.matches = function(dictionary) {
  let letters = this.mainWord.split('').sort().join('');

  return dictionary.filter((dictWord) => {
    return letters === dictWord.split('').sort().join('');
  });
};

module.exports = Anagram;
