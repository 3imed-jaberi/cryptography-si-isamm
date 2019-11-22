/**
 * 
 * Find a^-1 (the multiplicative inverse of a in the group of integers modulo m.) 
 * 
 * @param {number} a : a of fct affine (ax+b)
 */
const a_inverse = (a) => {

  let calc = 0; 

  for (let index = 0; index < 26; index++) {
      calc = (a * index) % 26; 

      // Check if (a*i)%26 == 1, 
      if (calc == 1) {
          return index ;
      } 
  }
}


/**
 * 
 * generte key with same length of the text .. 
 * 
 * @param {string} key : key of cipher .. 
 * @param {number} lengthFormel : length of the text in the main func .. 
 */
const reformKey = (key,lengthFormel) => {
  let i = 0 ;
  while ( key.length !== lengthFormel) {
    key+=(key.charAt(i)); 
    i++;
  }
  return key;
}


/**
 * 
 * Add all char needed for the table .. 
 * 
 * @param {string} msg : text should be updated ..
 * @param {number} mesureSize :  number of the char should be added .. 
 * @param {char} charAdded : char should be added .. 
 */
const remesureString = (msg, mesureSize, charAdded) => {

  let result = msg.split('');
  
  for (let i = 0; i < mesureSize; i++) {
    result.push(charAdded);
  }
    
  return result;
}


/**
 * 
 * Remove the first col inside the msg after casting to string array ..
 * 
 * @param {string} msg : the text you want to encrypt / decrypt .. 
 * @param {number} nbLine : number of line .. 
 * @param {string[]} RigthIndexArray : array have the correct index (TRI) ..
 */ 
const cleanTableByRemoveFirstColumun = (msg, nbLine, RigthIndexArray) => {
  let srcMsg = msg.split('');
  let index = 0;
  let result = [];
  while (srcMsg.length !== 0) {
    let getSingleRow = srcMsg.splice(0, nbLine);
      getSingleRow.unshift(RigthIndexArray[index]);    
      result.push(getSingleRow);
      index++;
  }   

  return result;
};

  
// let transpose = (matrix) => {
//   return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
// } 


module.exports = {
  a_inverse,
  reformKey,
  remesureString,
  cleanTableByRemoveFirstColumun
  
};
