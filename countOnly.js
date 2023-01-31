//`
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let keys = Object.keys(itemsToCount);
  let arr = [];
  let final = [];
  for (let i = 0; i < allItems.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if(allItems[i] === keys[j] && itemsToCount[allItems[i]] === true) {
        arr.push(keys[j]);
      }
    }
  }
  arr.forEach(element => {final[element] = (final[element] || 0) + 1;})
  return final;
}



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

//const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });