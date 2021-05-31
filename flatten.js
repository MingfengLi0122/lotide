const eqArrays = function(arr1, arr2) {
  //console.log("arr1: ", arr1);
  //console.log("arr2: ", arr2);
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🤗 Assertion of arrays passed: ${arr1} === ${arr2}`);
    return true;
  } else {
    console.log(`😰 Assertion of arrays failed: ${arr1} !== ${arr2}`);
    return false;
  }
};

let res = [];
const flatten = function(array) {
  for (const ele of array) {
    if (Array.isArray(ele)) {
      flatten(ele);
    } else {
      res.push(ele);
    }
  }
  return res;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
const arr1 = flatten([1, 2, [3, 4], 5, [6]]);
const arr2 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(arr1, arr2);