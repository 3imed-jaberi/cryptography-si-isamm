const { reformKey } = require('../utils');
const { isString } = require('../validation');
const { 
  __STRING_ALPHABET_RegExp__,
  __MAJUS_CODE_OF_A__, 
  __LENGTH_ALPHABET__,
  __ENCRYPT__,
  __DECRYPT__
} = require('../global');


/**
 * 
 * Encryption / Decryption using the Vigenere algorithm 👴 .. 
 * 
 * @param {string} message : The text you want to encrypt / decrypt .. 
 * @param {string} key : key for encrypt / decrypt text ..  
 * @param {string} type : type of operation ..
 */
const main = (message, key, type) => {
  if(isString(message) && isString(key) && isString(type)) {

    let cleanUpMsg = message.toUpperCase().match(__STRING_ALPHABET_RegExp__);
    let source = cleanUpMsg.map( letter => letter.charCodeAt(0) - __MAJUS_CODE_OF_A__);
      
    let reformTheKey= reformKey(key,source.length).toUpperCase().split("").map(letter => letter.charCodeAt(0) - __MAJUS_CODE_OF_A__);
    
    switch (type.toLowerCase()) {
      case __ENCRYPT__: {
        return source.map((num, index) => String.fromCharCode((num + reformTheKey[index]) % __LENGTH_ALPHABET__ + __MAJUS_CODE_OF_A__)).join('');
      }
      case __DECRYPT__: {
        return source.map((num, index) => {
                  let charAssertDecode = num - reformTheKey[index] > 0 ? num - reformTheKey[index] : (num - reformTheKey[index]) + 26;

                  return String.fromCharCode(charAssertDecode % __LENGTH_ALPHABET__ + __MAJUS_CODE_OF_A__)
               }).join('');
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