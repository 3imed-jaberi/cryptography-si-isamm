require('mocha');
const { expect } = require('chai');
const { Cesar, Affine, Vigenere, Transposition } = require('../');




describe('1 - Cesar Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    let key = 4 ;
    let msg = 'SECRET'; 
    let result = 'WIGVIX';
    expect(Cesar(msg,key)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    let key = -4 ;
    let msg = 'WIGVIX';
    let result = 'SECRET';
    expect(Cesar(msg,key)).to.equal(result);
  });

});


describe('2 - Affine Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    let msg = 'GOLD'; 
    let a = 9 ;
    let b = 9 ;
    let type = 'Encrypt';
    let result = 'LFEK';
    expect(Affine(msg,a,b,type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    let msg = 'LFEK'; 
    let a = 9 ;
    let b = 9 ;
    let type = 'Decrypt';
    let result = 'GOLD';
    expect(Affine(msg,a,b,type)).to.equal(result);
  });

});


describe('3 - Vigenre Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    let key = 'pirate' ;
    let msg = 'demain a dix heure'; 
    let type = 'Encrypt';
    let result = 'SMDABRPLZXAIJZV';
    expect(Vigenere(msg,key,type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    let key = 'pirate';
    let msg = 'SMDABRPLZXAIJZV';
    let type = 'Decrypt';
    let result = 'Demainadixheure'.toUpperCase();
    expect(Vigenere(msg,key,type)).to.equal(result);
  });

});


describe('4 - Transposition Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    let key = 'maman' ;
    let msg = 'demain a quatorze heure'; 
    let type = 'Encrypt';
    let result = '/E AER/A OH /DNUZU/MAT E/IQRE ';
    expect(Transposition(msg,key,type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    let key = 'maman' ;
    let msg = '/E AER/A OH /DNUZU/MAT E/IQRE '; 
    let type = 'Decrypt';
    let result = 'DEMAIN A QUATORZE HEURE  ';
    expect(Transposition(msg,key,type)).to.equal(result);
  });

});
