require('mocha');
const { expect } = require('chai');
const { Cesar, Affine, Vigenere, Transposition } = require('../');
const { __ENCRYPT__, __DECRYPT__, __ERROR_INPUT__, __ERROR_OPERATION__ } = require('../src/global');


describe('1 - Cesar Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    let key = 4;
    let msg = 'SECRET'; 
    let result = 'WIGVIX';
    expect(Cesar(msg, key)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    let key = -4;
    let msg = 'WIGVIX';
    let result = 'SECRET';
    expect(Cesar(msg, key)).to.equal(result);
  });

  it ('Failed - Input Type 🔏', () => {
    let key = '-4'; // worng .. 
    let msg = 'WIGVIX';
    expect(() => Cesar(msg, key)).to.throw(new Error(__ERROR_INPUT__).message);
  });

});


describe('2 - Affine Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    let msg = 'GOLD'; 
    let a = 9;
    let b = 9;
    let type = __ENCRYPT__;
    let result = 'LFEK';
    expect(Affine(msg, a, b, type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    let msg = 'LFEK'; 
    let a = 9;
    let b = 9;
    let type = __DECRYPT__;
    let result = 'GOLD';
    expect(Affine(msg, a, b, type)).to.equal(result);
  });

  it ('Failed - Operation Type 🔏', () => {
    let msg = 'LFEK'; 
    let a = 9;
    let b = 9;
    let type = 'bla bla';
    expect(() => Affine(msg, a, b, type)).to.throw(new Error(__ERROR_OPERATION__).message);
  });

  it ('Failed - Input Type 🔏', () => {
    let msg = 'LFEK'; 
    let a = '9'; // worng
    let b = '9'; // worng
    let type = 'bla bla';
    expect(() => Affine(msg, a, b, type)).to.throw(new Error(__ERROR_INPUT__).message);
  });

});


describe('3 - Vigenre Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    let key = 'pirate';
    let msg = 'demain a dix heure'; 
    let type = __ENCRYPT__;
    let result = 'SMDABRPLZXAIJZV';
    expect(Vigenere(msg, key, type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    let key = 'pirate';
    let msg = 'SMDABRPLZXAIJZV';
    let type = __DECRYPT__;
    let result = 'Demainadixheure'.toUpperCase();
    expect(Vigenere(msg, key, type)).to.equal(result);
  });

  it ('Failed - Operation Type 🔏', () => {
    let key = 'pirate';
    let msg = 'SMDABRPLZXAIJZV';
    let type = 'bla bla';
    expect(() => Vigenere(msg, key, type)).to.throw(new Error(__ERROR_OPERATION__).message);
  });

  it ('Failed - Input Type 🔏', () => {
    let key = 'pirate';
    let msg = +'SMDABRPLZXAIJZV';
    let type = 'bla bla';
    expect(() => Vigenere(msg, key, type)).to.throw(new Error(__ERROR_INPUT__).message);
  });

});


describe('4 - Transposition Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    let key = 'maman';
    let msg = 'demain a quatorze heure'; 
    let type = __ENCRYPT__;
    let result = '/E AER/A OH /DNUZU/MAT E/IQRE ';
    expect(Transposition(msg, key, type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    let key = 'maman';
    let msg = '/E AER/A OH /DNUZU/MAT E/IQRE '; 
    let type = __DECRYPT__;
    let result = 'DEMAIN A QUATORZE HEURE  ';
    expect(Transposition(msg, key, type)).to.equal(result);
  });

  it ('Failed - Operation Type 🔏', () => {
    let key = 'maman';
    let msg = '/E AER/A OH /DNUZU/MAT E/IQRE '; 
    let type = 'bla bla';
    expect(() => Transposition(msg, key, type)).to.throw(new Error(__ERROR_OPERATION__).message);
  });

  it ('Failed - Input Type 🔏', () => {
    let key = +'maman';
    let msg = '/E AER/A OH /DNUZU/MAT E/IQRE '; 
    let type = 'bla bla';
    expect(() => Transposition(msg, key, type)).to.throw(new Error(__ERROR_INPUT__).message);
  });

});
