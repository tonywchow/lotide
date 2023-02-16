const eqArrays = require('./eqArrays');
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {
    console.log('Arrays are identical');
  } else {
    console.log('Arrays are not identical');  
  }
};

module.exports = assertArraysEqual;