const { 
  __STRING_ALPHABET_RegExp__,
  __LENGTH_ALPHABET__,
  __MAJUS_CODE_OF_A__ 
} = require('../global');
const { isString, isNumber, hasMaxLength } = require('../validation');



/**
 * 
 * Encryption / Decryption using the Cesar algorithm 👱🏼 .. 
 * 
 * @param {string} message: The text you want to encrypt / decrypt .. 
 * @param {number} key: key for encrypt / decrypt text ..  
 */
const main = (message, key) => {
  if(isString(message) && isNumber(key) && hasMaxLength(key,2)){
    return message.toUpperCase().match(__STRING_ALPHABET_RegExp__).map( letter => String.fromCharCode((((letter.charCodeAt(0) - __MAJUS_CODE_OF_A__) + key) % __LENGTH_ALPHABET__ ) + __MAJUS_CODE_OF_A__ )).join('');
  }else{
    throw new Error('Check you inputs .. ');
  }
}


module.exports = main;