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
    if(string[i] !== ' ') {
      count[string[i]] = (count[string[i]] || 0) +1; 
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));