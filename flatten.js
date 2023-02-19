/*
This function takes in an array that contains elements including nested array of elements and returns a flattened version of the array
*/
const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {//loops through array
    if (typeof arr[i] === 'number') {//checks if item is typeof number
      newArr.push(arr[i]);
    } else if (typeof arr[i] === 'object') {//finds the array within the array
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
};

module.exports = flatten;
