const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  let count = [];
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if(string[i] !== ' ') {
      if(count[letter] === undefined) {
        count[letter] = 1;
      } else {
        count[letter] += 1;
      }
    }
  }
  return count;
}

console.log(countLetters("LHL"));