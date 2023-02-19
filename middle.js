const middle = function(arr) {
  let result = [];
  if (arr.length <= 2) {//If Array is less than 2 return empty array
    return [];
  }
  if (arr.length % 2 === 0) { //checks if array length is even
    result.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);
    return result;
  }
  if (arr.length % 2 !== 0) { //check if array length is odd
    result.push(arr[Math.floor(arr.length / 2)]);
    return result;
  }
};

module.exports = middle;

