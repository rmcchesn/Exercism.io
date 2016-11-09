'use strict';

let DnaTranscriber = function() {

};

let rnaConversionChart = {
  'A': 'U',
  'C': 'G',
  'G': 'C',
  'T': 'A'
};

DnaTranscriber.prototype.toRna = function(strand1) {
  return strand1.split('')
    .map(nucleotide => rnaConversionChart[nucleotide])
    .join('');
};

module.exports = DnaTranscriber;
