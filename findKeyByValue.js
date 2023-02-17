const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (object[keys[i]] === value) {
      return keys[i];
      }
    }
  }
  
  module.exports = findKeyByValue;

    
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");