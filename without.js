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

const without = function(source, itemsToRemove) {
  let res = [];
  for (let element of source) {
    let condition = false;
    for (let item of itemsToRemove) {
      if (element === item) {
        condition = true;
      }
    }
    if (!condition) res.push(element);
  }
  console.log(res);
  return res;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3", "5"], [1, "2", "3", 5]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
