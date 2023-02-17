const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {//Loops through source array
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j] && typeof source[i] === typeof itemsToRemove[j]) { //Determines items to remain
        result.push(source[i]);//pushes those items into a new array
      }
    }
  }
  return result; //returning array
};

module.exports = without;
//Below are the test cases
//console.log(without([1, 2, 3], [1]));
//console.log(without(['1', '2', '3'], [1,2,'3']));
