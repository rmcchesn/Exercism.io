'use strict';

let BeerSong = function() { };

BeerSong.prototype.verse = function(verseNum) {
  let firstSentence, secondSentence;

  if (verseNum > 2) {
    firstSentence = `${verseNum} bottles of beer on the wall, ` +
      `${verseNum} bottles of beer.\n`;
    secondSentence = 'Take one down and pass it around, ' +
      `${verseNum - 1} bottles of beer on the wall.\n`;
  } else if (verseNum === 1) {
    firstSentence = `${verseNum} bottle of beer on the wall, ` +
      `${verseNum} bottle of beer.\n`;
    secondSentence = 'Take it down and pass it around, ' +
      'no more bottles of beer on the wall.\n';
  } else if (verseNum === 0) {
    firstSentence = 'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n';
    secondSentence = 'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';
  } else {
    firstSentence = `${verseNum} bottles of beer on the wall, ` +
      `${verseNum} bottles of beer.\n`;
    secondSentence = 'Take one down and pass it around, ' +
      `${verseNum - 1} bottle of beer on the wall.\n`;
  }

  return firstSentence + secondSentence;
};

BeerSong.prototype.sing = function(start, end = 0) {
  let allVerses = '';

  for (let i = start; i >= end; i --) {
    allVerses += this.verse(i);
    i > end ? allVerses += '\n' : '';
  }

  return allVerses;
};

module.exports = BeerSong;
