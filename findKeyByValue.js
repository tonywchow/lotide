const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {//loops through the keys of the object
    if (object[keys[i]] === value) {//logic to find the value
      return keys[i];
    }
  }
};
  
module.exports = findKeyByValue;

//Below are the test cases:
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
