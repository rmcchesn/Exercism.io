let Pangram = function(phrase) {
  this.phrase = phrase;
};

Pangram.prototype.isPangram = function() {
  const duplicates = (/(.)(?=.*\1)/gi);
  const nonLetters = (/[^a-z]/gi);

  let formattedPhrase = this.phrase
    .replace(nonLetters, '')
    .replace(duplicates, '');

  return formattedPhrase.length === 26;
};

module.exports = Pangram;
