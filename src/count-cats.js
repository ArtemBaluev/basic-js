const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let count = 0;
  for(let i=0;i<backyard.length;i++){
    for(let y=0;y<backyard[i].length;y++){
      if(backyard[i][y] === "^^"){
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
