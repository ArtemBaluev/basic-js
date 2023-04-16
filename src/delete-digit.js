const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(digit) {
  // remove line with error and write your code here
  let max = 0;
  let str = String(digit);
  let arr = str.split('');
  for(let i=0;i<arr.length;i++){
    let temp_arr = [...arr];
    let test_str = '';
    temp_arr.splice(i,1);
    for(let x of temp_arr){
      test_str += x;
    }
    if(Number(test_str>max)){
      max = Number(test_str);
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
