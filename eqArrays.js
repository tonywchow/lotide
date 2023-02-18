const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {//checks if the length matches
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {//checks if the items within the arrays match
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;



