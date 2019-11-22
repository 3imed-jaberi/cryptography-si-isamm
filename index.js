
const Cesar = require('./src/cryptography/Cesar');
const Affine = require('./src/cryptography/Affine');
const Vigenere = require('./src/cryptography/Vigenere');
const Transposition = require('./src/cryptography/Transposition');


console.log(Transposition('demain a quatorze heure','maman','encrypt'));

console.log(Transposition('/E AER/A OH /DNUZU/MAT E/IQRE ','maman','decrypt'));

module.exports = {
  Cesar,
  Affine,
  Vigenere,
  Transposition
};