/*
Takes in an object and callback and returns the first key that meets the criteria specified in callback
*/
const findKey = (object, callback) => {
  for (let item in object) {//loops through the object
    let firstOb = object[item];
    if (callback(firstOb)) {//is callback function returns true then return item
      return item;
    }
  }
};

module.exports = findKey;
