
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {//loops through array
    console.log(item);
    if (itemsToCount[item]) {//if keys exists add 1, if undefined then add to object
      result[item] = (result[item] || 0) + 1;
    }
  }
  return result;
};

module.exports = countOnly;
//Below are test cases:
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
  

  
//Alternate code:
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