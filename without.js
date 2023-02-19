const assertArrayEqual = require('./assertArraysEqual')
const without = function(source, itemsToRemove) {
  let copyOfSource = source;//Copies the source array to manipulate
  for (let i = 0; i < copyOfSource.length; i++) {//Loops through the copy of the source array
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (typeof copyOfSource[i] === typeof itemsToRemove[j]) { //Determines if the item type is equal
        if (copyOfSource[i] === itemsToRemove[j]) { //If items are equal, it will pop the item at the index
          copyOfSource.splice(i,1)
        }
      }
    }
  }
  return copyOfSource; //returning array
};

module.exports = without;
//Below are the test cases
console.log(without([1, 2, 3], [1]));
console.log(without(['1', '2', '3'], [1,2,'3']));
console.log(without([1, 2, 3], [4, 2])); // expected result => [1, 3]
console.log(without([1, 2, 3], [1, 2])); //expected result => [3]

