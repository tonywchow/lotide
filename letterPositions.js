/*
This function takes in a string and returns all indices of letter positions in the string
*/
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {//loops through the sentence
    const letter = sentence[i];
    if (sentence[i] !== ' ') {//ensure the value is not a space
      if (results[letter] === undefined) {//
        results[letter] = [i];
      } else {
        results[letter].push(i); //pushes all indices of letter position in string
      }
    }
  }
  return results;
};

module.exports = letterPositions;

