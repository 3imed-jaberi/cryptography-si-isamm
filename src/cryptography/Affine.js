const { a_inverse } = require('../utils');
const { __STRING_ALPHABET_RegExp__, __LENGTH_ALPHABET__, __MAJUS_CODE_OF_A__ } = require('../global');



/**
 * 
 * Encryption / Decryption using the Vigenere algorithm 👴 .. 
 * 
 * @param {string} message : The text you want to encrypt / decrypt .. 
 * @param {number} a : first number in affine function 'ax+b' .. 
 * @param {number} b : first number in affine function 'ax+b' .. 
 * @param {string} type : type of operation ..
 */
const main = (message, a, b, type) => {

    let CleanUpMsg = message.toUpperCase().match(__STRING_ALPHABET_RegExp__);

    if ( type.toLowerCase() === 'encrypt' ){
        return CleanUpMsg.map( letter => String.fromCharCode(((( a * (letter.charCodeAt(0) - __MAJUS_CODE_OF_A__) )+b) % __LENGTH_ALPHABET__ ) + __MAJUS_CODE_OF_A__ )).join('');

    }else if ( type.toLowerCase() === 'decrypt' ){
        return CleanUpMsg.map( letter => String.fromCharCode(((a_inverse(a) * ((letter.charCodeAt(0) + __MAJUS_CODE_OF_A__) - b )) % __LENGTH_ALPHABET__ ) + __MAJUS_CODE_OF_A__ )).join('');
    }else{
        return -1;
    }

};


module.exports = main ;
















// note : 
// cle (a,b) avec a in ]0,r[ & b in [0,r[
// f(x) = (ax+b) mod |r|
// f'(x) = a2(x-b) mod |r|
// pgcd(a,r) = 1 // a & a2 = 1 mod |r|
// r = __LENGTH_ALPHABET__ 
