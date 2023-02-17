

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let results = true;
  if (keys1.length !== keys2.length) { //Checks length
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    if (typeof object1[keys1[i]] !== typeof object2[keys1[i]]) { //Check the type
      return false;
    }
    if (Array.isArray(object1[keys1[i]]) && Array.isArray(object2[keys1[i]])) { // checks if the keys are an array
      if (eqArrays(object1[keys1[i]], object2[keys1[i]]) !== true) {
        return false
      }
    
    } else if (object1[keys1[i]] !== object2[keys1[i]]) {
      results = false;
    }
  }
  return results;
}

module.exports = eqObjects;
