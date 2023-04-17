const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(line) {
  // remove line with error and write your code here
  let result = '';
  let count = 0;
  for(let i=0;i<line.length;i++){
    if(line[i] === line[i+1]){
      count++;
    }else if(count === 0){
      result += line[i];
    }else{
      count++;
      result += count + line[i];
      count = 0;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
