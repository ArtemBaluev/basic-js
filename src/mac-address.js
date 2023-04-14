const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(mac_address) {
  // remove line with error and write your code here
  let mac_array = mac_address.split('-');
  if(mac_array.length != 6){
    return false;
  }
  for(let i=0;i<mac_array.length;i++){
    if(!/\d{2}|\d[ABCDEF]|[ABCDEF]{2}|[ABCDEF]\d/.test(mac_array[i])){
      return false;
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
