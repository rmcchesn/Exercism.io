let Pangram = function(phrase) {
  this.phrase = phrase;
};

Pangram.prototype.isPangram = function() {
  const duplicates = (/(.)(?=.*\1)/g);
  const nonLetters = (/[^a-z]/g);

  let formattedPhrase = this.phrase
    .toLowerCase()
    .replace(nonLetters, '')
    .replace(duplicates, '');

  return formattedPhrase.length === 26;
};

module.exports = Pangram;
