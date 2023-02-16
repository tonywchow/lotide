// const eqArrays = function(arr1, arr2) {
//   let result = '';
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// } 

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2) === true) {
//     console.log('Arrays are identical');
//   } else {
//     console.log('Arrays are not identical');  
//   }
// };

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] !== itemsToRemove[j] && typeof source[i] === typeof itemsToRemove[j]) {
        result.push(source[i]);
      }
    }
  }
  return result;
}

module.exports = without;
//console.log(without([1, 2, 3], [1]));
//console.log(without(['1', '2', '3'], [1,2,'3']));
