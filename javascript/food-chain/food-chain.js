'use strict';

let FoodChain = function() { };

let animals = [
  'fly', 'spider', 'bird',
  'cat', 'dog', 'goat',
  'cow', 'horse'];

let rhymes = {
  fly: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
  spider: 'It wriggled and jiggled and tickled inside her.\n',
  bird: 'How absurd to swallow a bird!\n',
  cat: 'Imagine that, to swallow a cat!\n',
  dog: 'What a hog, to swallow a dog!\n',
  goat: 'Just opened her throat and swallowed a goat!\n',
  cow: 'I don\'t know how she swallowed a cow!\n',
  horse: 'She\'s dead, of course!\n\n'};

let standard = {
  intro: 'I know an old lady who swallowed a '
};

FoodChain.prototype.verse = function(verseCount) {
  let completedVerses = '';

  for (let i = 0; i < verseCount; i += 1) {
    let animal = animals[i];
    completedVerses += standard.intro;
    completedVerses += animal;
    completedVerses += '.\n';
    completedVerses += rhymes[animal];
  }

  return completedVerses;
};

FoodChain.prototype.verses = function(start, end) {

};

module.exports = FoodChain;
