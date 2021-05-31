const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const b = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
//const c = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false

//assertEqual(a, true);
assertEqual(b, false)