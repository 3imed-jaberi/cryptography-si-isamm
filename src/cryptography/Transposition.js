const { remesureString, cleanTableByRemoveFirstColumun } = require('../utils');
const { __STRING_ALPHABET_WITH_SPACE_RegExp__, __CONST_SEPARATOR__ } = require('../global');
const { isString } = require('../validation');



/**
 * 
 * Encryption using the Transposition Matrix algorithm 📊 .. 
 * 
 * @param {string} message : The text you want to encrypt / decrypt .. 
 * @param {string} key : key for encrypt / decrypt text ..  
 */
const Encrypt = (message, key) => {

  let result = [];

  let CleanUpMsg = message.toUpperCase().match(__STRING_ALPHABET_WITH_SPACE_RegExp__);
  let matrix = [];
  let nbColumn = key.length;
  let nbLine = (CleanUpMsg.length % nbColumn == 0) ? CleanUpMsg.length /nbColumn : parseInt(CleanUpMsg.length / nbColumn) + 1 ;

  // add required string .. 
  CleanUpMsg = remesureString(CleanUpMsg.join(''),((nbLine * nbColumn) - CleanUpMsg.length),' ');

  while (CleanUpMsg.length !== 0) {
    matrix.push(CleanUpMsg.splice(0, nbColumn))
  } 
 
  // get KeyValueIndex then filter with Index ..
  let RigthIndexArray = key.toUpperCase().split('').map( (char,index) => (char+index)).sort().map(ch => ch.charAt(ch.length-1));


  RigthIndexArray.forEach(itemIndex => {
    let index = 0 ;
    result.push(__CONST_SEPARATOR__ );
    while (index !== nbLine ) {
      result.push(matrix[index][parseInt(itemIndex)]);
      index++;
    }
  });

  return result.join('');

};


/**
 * 
 * Decryption using the Transposition Matrix algorithm 📊 .. 
 * 
 * @param {string} message : The text you want to encrypt / decrypt .. 
 * @param {string} key : key for encrypt / decrypt text ..  
 */
const Decrypt = (message, key) => {

  let result = [];

  let CleanUpMsg = message.toUpperCase().match(__STRING_ALPHABET_WITH_SPACE_RegExp__);
  let matrix = [];
  let nbColumn = key.length;
  let nbLine = (CleanUpMsg.length % nbColumn == 0) ? CleanUpMsg.length /nbColumn : parseInt(CleanUpMsg.length / nbColumn) + 1 ;
  
  let RigthIndexArray = key.toUpperCase().split('').map( (char,index) => (char+index)).sort().map(ch => ch.charAt(ch.length-1)); 

  matrix = cleanTableByRemoveFirstColumun(CleanUpMsg.join(''),nbLine,RigthIndexArray);

  // clean-up
  matrix.sort().map( item => item.shift());

  for (let L = 0; L < nbLine; L++) {
    for (let C = 0; C < nbColumn; C++) {
      result.push(matrix[C][L]);
    }  
  }

  
  return result.join('');

};



/**
 * 
 * Encryption / Decryption using the Transposition Matrix algorithm 📊 .. 
 * 
 * @param {string} message : The text you want to encrypt / decrypt .. 
 * @param {string} key : key for encrypt / decrypt text .. 
 * @param {string} type : type of operation ..
 */
const main = (message, key, type) => {
  if(isString(message) && isString(key) && isString(type)){
    if (type.toLocaleUpperCase() === 'ENCRYPT') {
      return Encrypt(message, key)
    }else if (type.toLocaleUpperCase() === 'DECRYPT') {
      return Decrypt(message, key);
    }else{
      throw new Error('Your type should be `decrypt` or `encrypt` .. ');
    }
  }else{
    throw new Error('Check you inputs .. ');
  }
}


module.exports = main ;
