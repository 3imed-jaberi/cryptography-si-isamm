require('mocha');
const { expect } = require('chai');
const { Cesar, Affine, Vigenere, Transposition } = require('../');
const { __ENCRYPT__, __DECRYPT__, __ERROR_INPUT__, __ERROR_OPERATION__ } = require('../src/global');


// once declare: 
let key, msg, a, b, type, result; 

describe('1 - Cesar Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    key = 4;
    msg = 'SECRET'; 
    result = 'WIGVIX';
    expect(Cesar(msg, key)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    key = -4;
    msg = 'WIGVIX';
    result = 'SECRET';
    expect(Cesar(msg, key)).to.equal(result);
  });

  it ('Failed - Input Type 🔏', () => {
    key = '-4'; // worng .. 
    msg = 'WIGVIX';
    expect(() => Cesar(msg, key)).to.throw(new Error(__ERROR_INPUT__).message);
  });

});


describe('2 - Affine Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    msg = 'GOLD'; 
    a = 9;
    b = 9;
    type = __ENCRYPT__;
    result = 'LFEK';
    expect(Affine(msg, a, b, type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    msg = 'LFEK'; 
    a = 9;
    b = 9;
    type = __DECRYPT__;
    result = 'GOLD';
    expect(Affine(msg, a, b, type)).to.equal(result);
  });

  it ('Failed - Operation Type 🔏', () => {
    msg = 'LFEK'; 
    a = 9;
    b = 9;
    type = 'bla bla';
    expect(() => Affine(msg, a, b, type)).to.throw(new Error(__ERROR_OPERATION__).message);
  });

  it ('Failed - Input Type 🔏', () => {
    msg = 'LFEK'; 
    a = '9'; // worng
    b = '9'; // worng
    type = 'bla bla';
    expect(() => Affine(msg, a, b, type)).to.throw(new Error(__ERROR_INPUT__).message);
  });

});


describe('3 - Vigenre Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    key = 'pirate';
    msg = 'demain a dix heure'; 
    type = __ENCRYPT__;
    result = 'SMDABRPLZXAIJZV';
    expect(Vigenere(msg, key, type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    key = 'pirate';
    msg = 'SMDABRPLZXAIJZV';
    type = __DECRYPT__;
    result = 'Demainadixheure'.toUpperCase();
    expect(Vigenere(msg, key, type)).to.equal(result);
  });

  it ('Failed - Operation Type 🔏', () => {
    key = 'pirate';
    msg = 'SMDABRPLZXAIJZV';
    type = 'bla bla';
    expect(() => Vigenere(msg, key, type)).to.throw(new Error(__ERROR_OPERATION__).message);
  });

  it ('Failed - Input Type 🔏', () => {
    key = 'pirate';
    msg = +'SMDABRPLZXAIJZV';
    type = 'bla bla';
    expect(() => Vigenere(msg, key, type)).to.throw(new Error(__ERROR_INPUT__).message);
  });

});


describe('4 - Transposition Cipher 🗝' , () => {

  it ('Encrypt 🔐', () => {
    key = 'maman';
    msg = 'demain a quatorze heure'; 
    type = __ENCRYPT__;
    result = '/E AER/A OH /DNUZU/MAT E/IQRE ';
    expect(Transposition(msg, key, type)).to.equal(result);
  });

  it ('Decrypt 🔏', () => {
    key = 'maman';
    msg = '/E AER/A OH /DNUZU/MAT E/IQRE '; 
    type = __DECRYPT__;
    result = 'DEMAIN A QUATORZE HEURE  ';
    expect(Transposition(msg, key, type)).to.equal(result);
  });

  it ('Failed - Operation Type 🔏', () => {
    key = 'maman';
    msg = '/E AER/A OH /DNUZU/MAT E/IQRE '; 
    type = 'bla bla';
    expect(() => Transposition(msg, key, type)).to.throw(new Error(__ERROR_OPERATION__).message);
  });

  it ('Failed - Input Type 🔏', () => {
    key = +'maman';
    msg = '/E AER/A OH /DNUZU/MAT E/IQRE '; 
    type = 'bla bla';
    expect(() => Transposition(msg, key, type)).to.throw(new Error(__ERROR_INPUT__).message);
  });

});
