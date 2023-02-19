/*
This function takes in a string and returns a count of each of the items in the string
*/
const countLetters = function(string) {
  let count = [];
  for (let i = 0; i < string.length; i++) {//loops through the string
    const letter = string[i];
    if (string[i] !== ' ') {//ensure the item is not a space
      if (count[letter] === undefined) {//if the letter does not exist add one
        count[letter] = 1;
      } else {
        count[letter] += 1;//if it exist, add to existing count
      }
    }
  }
  return count;
};

module.exports = countLetters;
//Below are test cases:
// console.log(countLetters("LHL"));
