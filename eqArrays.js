const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😃😃😃Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("😡😡😡Assertion Failed: " + actual + " !== " + expected);
  }
};

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

//const a = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
const b = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
//const c = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false

//assertEqual(a, true);
assertEqual(b, false);
//assertEqual(c, false);


// const eqArrays = function(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// };

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true

// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false


// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS