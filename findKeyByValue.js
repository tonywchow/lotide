/*
Takes in an object and a value and returns the first key that corresponds to that value
*/
const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {//loops through the keys of the object
    if (object[keys[i]] === value) {//logic to find the value
      return keys[i];
    }
  }
};
  
module.exports = findKeyByValue;
