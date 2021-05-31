
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        // console.log("arr1[i]: ", arr1[i]);
        // console.log("arr2[i]: ", arr2[i]);
        if (arr1[i].length !== arr2[i].length) return false;
        eqArrays(arr1[i], arr2[i]);
      } else {
        console.log("arr1[i]: ", arr1[i]);
        console.log("arr2[i]: ", arr2[i]);
        if (arr1[i] !== arr2[i]) {
          return false;
        } 
      }
    }
    return true;
  } 
};

module.exports = eqArrays;
