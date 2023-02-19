/*
Takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array
*/
const without = function(source, itemsToRemove) {
  let copyOfSource = source;//Copies the source array to manipulate
  for (let i = 0; i < copyOfSource.length; i++) {//Loops through the copy of the source array
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (typeof copyOfSource[i] === typeof itemsToRemove[j]) { //Determines if the item type is equal
        if (copyOfSource[i] === itemsToRemove[j]) { //If items are equal, it will pop the item at the index
          copyOfSource.splice(i,1);
        }
      }
    }
  }
  return copyOfSource; //returning array
};

module.exports = without;

