
const isNumber = (input) =>  (typeof input === 'number');
const isString = (input) =>  (typeof input === 'string');
const hasMaxLength = (input, size) => (input.toString().length <= size);



module.exports = {
  isNumber,
  isString,
  hasMaxLength
};