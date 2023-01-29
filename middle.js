const eqArrays = function(arr1, arr2) {
  let result = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
} 

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log('Arrays are identical');
  } else {
    console.log('Arrays are not identical');  
  }
};

const middle = function(arr) {
  let result = [];
  if (arr.length % 2 === 0 && arr.length > 2) { //checks if array length is even
    result.push(arr[(arr.length/2)-1], arr[arr.length/2]);
    return result;

  } else if (arr.length % 2 !== 0 && arr.length > 2) { //check if array length is odd
    result.push(arr[Math.floor(arr.length/2)])
    return result;

  } else { //returns empty string if arry length is less than 2
    return result = [];
  }
};

let array = [1, 2, 3, 4, 5, 6]

assertArraysEqual(middle(array), [3, 4])