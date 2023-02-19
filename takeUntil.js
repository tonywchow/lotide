/*
Takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
*/
const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item) === false) {//if value is false it will push item to result array
      results.push(item);
    } else if (callback(item) === true) {//if values is true, it breaks the loop
      break;
    }
  }
  return results;
};
 
module.exports = takeUntil;



