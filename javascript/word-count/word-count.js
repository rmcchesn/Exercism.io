let Words = function() {

};

Words.prototype.count = function(wordCollection) {
  let words = {};
  let re = /\s+/;

  wordCollection
    .trim()
    .split(re)
    .forEach((chars) => {
      let word = chars.toLowerCase();
      if (words[word] === undefined || typeof(words[word]) === 'function') {
        words[word] = 1;
      } else {
        words[word] += 1;
      }
    });

  return words;
};

module.exports = Words;
