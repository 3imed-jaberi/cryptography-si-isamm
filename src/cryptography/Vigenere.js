const { reformKey } = require('../utils');
const { __STRING_ALPHABET_RegExp__, __MAJUS_CODE_OF_A__, __LENGTH_ALPHABET__  } = require('../global');



/**
 * 
 * Encryption / Decryption using the Vigenere algorithm 👴 .. 
 * 
 * @param {string} message : The text you want to encrypt / decrypt .. 
 * @param {string} key : key for encrypt / decrypt text ..  
 * @param {string} type : type of operation ..
 */
const main = (message, key, type) => {

  let cleanUpMsg = message.toUpperCase().match(__STRING_ALPHABET_RegExp__);

  let source = cleanUpMsg.map( letter => letter.charCodeAt(0) - __MAJUS_CODE_OF_A__);
    
  let reformTheKey= reformKey(key,source.length).toUpperCase().split("").map(letter => letter.charCodeAt(0) - __MAJUS_CODE_OF_A__);
  
  
  if ( type.toLowerCase() === 'encrypt' ){
    return source.map( (num,index) => String.fromCharCode((num + reformTheKey[index]) % __LENGTH_ALPHABET__ + __MAJUS_CODE_OF_A__) ).join("");

  }else if ( type.toLowerCase() === 'decrypt' ){
    return source.map( (num,index) => {
      let charAssertDecode = num - reformTheKey[index] > 0 ? num - reformTheKey[index] : (num - reformTheKey[index])+26;
      return String.fromCharCode( charAssertDecode % __LENGTH_ALPHABET__ + __MAJUS_CODE_OF_A__)
    }).join("");
  }else{
    return -1;
  }
 
};


module.exports = main ;
