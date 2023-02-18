const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let result = [];
  if (arr.length % 2 === 0 && arr.length > 2) { //checks if array length is even
    result.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);
    return result;

  } else if (arr.length % 2 !== 0 && arr.length > 2) { //check if array length is odd
    result.push(arr[Math.floor(arr.length / 2)]);
    return result;

  } else { //returns empty string if arry length is less than 2
    return result = [];
  }
};

module.exports = middle;

