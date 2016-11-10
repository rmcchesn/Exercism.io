let Words = function() {

};

Words.prototype.count = function(wordCollection) {
  let words = {};

  wordCollection.split(' ').forEach((word) => {
    if (words[word] === undefined) {
      words[word] = 1;
    } else {
      words[word] += 1;
    }
  });

  return words;
};

module.exports = Words;
