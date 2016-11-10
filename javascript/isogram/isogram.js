let Isogram = function(phrase) {
  this.phrase = phrase;
};

Isogram.prototype.isIsogram = function() {
  const re = (/(.)(?=.*\1)/);

  let formattedPhrase = this.phrase
    .toLowerCase()
    .replace((/\s|[\-]/g), '');

  return !re.test(formattedPhrase);
};

module.exports = Isogram;
