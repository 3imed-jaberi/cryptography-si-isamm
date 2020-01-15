const { a_inverse } = require('../utils');
const { 
    __STRING_ALPHABET_RegExp__,
    __LENGTH_ALPHABET__,
    __MAJUS_CODE_OF_A__,
    __ENCRYPT__,
    __DECRYPT__
} = require('../global');
const { isString, isNumber, hasMaxLength } = require('../validation');



/**
 * 
 * Encryption / Decryption using the Vigenere algorithm 👴 .. 
 * 
 * @param {string} message: The text you want to encrypt / decrypt .. 
 * @param {number} a: first number in affine function 'ax+b' .. 
 * @param {number} b: first number in affine function 'ax+b' .. 
 * @param {string} type: type of operation ..
 */
const main = (message, a, b, type) => {
  if(isString(message) && isString(type) && isNumber(a) && isNumber(b) && hasMaxLength(a, 2) && hasMaxLength(b, 2)){
    let CleanUpMsg = message.toUpperCase().match(__STRING_ALPHABET_RegExp__);

    switch (type.toLowerCase()) {
      case __ENCRYPT__: {
        return CleanUpMsg.map( letter => String.fromCharCode(((( a * (letter.charCodeAt(0) - __MAJUS_CODE_OF_A__) ) + b) % __LENGTH_ALPHABET__ ) + __MAJUS_CODE_OF_A__ )).join('');
      }
      case __DECRYPT__: {
        return CleanUpMsg.map( letter => String.fromCharCode(((a_inverse(a) * ((letter.charCodeAt(0) + __MAJUS_CODE_OF_A__) - b )) % __LENGTH_ALPHABET__ ) + __MAJUS_CODE_OF_A__ )).join('');    
      }    
      default: {
        throw new Error('Your type should be `decrypt` or `encrypt` .. ');
      }
    }
  }else{
    throw new Error('Check you inputs .. ');
  }
};


module.exports = main;