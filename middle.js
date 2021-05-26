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

const middle = function(arr) {
  let mid = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return mid;
  } else {
    const start = 0;
    const end = arr.length - 1;
    const midIndex = Math.floor((start + end) / 2);
    //console.log(mid);
    if (arr.length % 2 === 0) {
      mid.push(arr[midIndex]);
      mid.push(arr[midIndex + 1]);
    } else {
      mid.push(arr[midIndex]);
    }
  }
  //console.log(mid);
  return mid;
};

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

assertArraysEqual(middle([1, 2, 3]), [2]); // => true
