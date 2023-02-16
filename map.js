// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const assertArraysEqual = function(arr1, arr2) {

//   if (eqArrays(arr1, arr2) === true) {
//     console.log('Arrays are identical');
//   } else {
//     console.log('Arrays are not identical');  
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// } 

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {  
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

module.exports = map;