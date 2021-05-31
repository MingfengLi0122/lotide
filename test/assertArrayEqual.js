const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

const arr1 = [2, 3, 4];
const arr2 = [2, "3", 4];
//assertArraysEqual(arr1, arr2);
assertEqual(assertArraysEqual(arr1, arr2), false);
