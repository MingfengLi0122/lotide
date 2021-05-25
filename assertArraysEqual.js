const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
    return `😃😃😃Assertion Passed: ${actual} === ${expected}`;
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    return `😡😡😡Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(arr1, arr2) {
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

const arr1 = [2, 3, 4];
const arr2 = [2, "3", 4];
//assertArraysEqual(arr1, arr2);
assertEqual(assertArraysEqual(arr1, arr2), false);
