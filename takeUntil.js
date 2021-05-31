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

const takeUntil = function(array, callback) {
  let res = [];
  for (let item of array) {
    if (!callback(item)) {
      res.push(item);
    } else {
      break;
    }
  }
  return res;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const expect1 = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1, expect1);

const expect2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, expect2);





