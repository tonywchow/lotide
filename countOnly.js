
const countOnly = function(allItems, itemsToCount) {
  // let keys = Object.keys(itemsToCount);
  // let final = {};
  // for (let i = 0; i < allItems.length; i++) {
  //   for (let j = 0; j < keys.length; j++) {
  //     if(allItems[i] === keys[j] && itemsToCount[allItems[i]] === true) {
  //       if (final[keys[j]] === undefined) {
  //         final[keys[j]] = 1
  //       } else {
  //         final[keys[j]] += 1;
  //       }
  //     }
  //   }
  // }
  
  // return final;
  const result = {};
  for (const item of allItems) {
    console.log(item)
    if (itemsToCount[item]) {
      result[item] = (result[item] || 0) + 1
    } 
  }
  return result
}

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

//const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });