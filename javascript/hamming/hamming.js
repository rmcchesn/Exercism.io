'use strict';

let Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
  let hammingDistance = 0;

  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  strand1.split('')
    .forEach((nucleotide, index) => {
      if (strand2[index] !== nucleotide) { hammingDistance += 1; }
    });

  return hammingDistance;
};

module.exports = Hamming;
