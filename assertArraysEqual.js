const eqArrays = require('./eqArrays');
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {//requires eqArray function and compares the two arrays. If they are equal then console log below:
    console.log('Arrays are identical');
  } else {
    console.log('Arrays are not identical');
  }
};

module.exports = assertArraysEqual;