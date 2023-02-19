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
//Below are the test cases
const data1 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


