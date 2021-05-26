const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😃😃😃Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("😡😡😡Assertion Failed: " + actual + " !== " + expected);
  }
};

const countLetters = function(str) {
  str = str.replace(/\s/g, "");
  console.log(str);
  const obj = {};
  for (let letter of str) {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  console.log(obj);
  return obj;
};

countLetters("lighthouse in the house");