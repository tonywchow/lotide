/*
Takes in an array and returns everything except the first element of the array
*/
const tail = function(arr) {
  return arr.slice(1); //logic to remove everything except for the first item in the array
};

module.exports = tail;

