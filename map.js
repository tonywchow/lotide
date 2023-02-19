/*
Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
*/
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {  
  const results = [];
  for (let item of array) {//looping through the array
    results.push(callback(item))//pushes item of array if it satisfies the callback function
  }
  return results;
};

module.exports = map;
