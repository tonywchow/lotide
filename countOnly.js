/*
This function takes in a collection of items and returns a specific subset of those items
*/
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {//loops through array
    if (itemsToCount[item]) {//if keys exists add 1, if undefined then add to object
      result[item] = (result[item] || 0) + 1;
    }
  }
  return result;
};

module.exports = countOnly;
