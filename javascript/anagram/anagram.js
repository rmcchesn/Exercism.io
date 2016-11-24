'use strict';

let Anagram = function(mainWord) {
  this.mainWord = mainWord;
};

Anagram.prototype.matches = function(dictionary) {
  if (!Array.isArray(dictionary)) {
    let rest = Array.prototype.slice.call(arguments, 1);
    dictionary = [dictionary].concat(rest);
  }

  let letters = this.mainWord
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  let formatMain = this.mainWord.toLowerCase();

  return dictionary.filter((dictWord) => {
    let testLetters = dictWord
      .toLowerCase()
      .split('')
      .sort()
      .join('');

    let formatDict = dictWord.toLowerCase();

    return letters === testLetters && formatDict !== formatMain;
  });
};

module.exports = Anagram;
