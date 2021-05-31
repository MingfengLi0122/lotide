# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lmf95122/lotide`

**Require it:**

`const _ = require('@lmf950122/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual()`: assert arrays
* `assertEqual()`: assert the inputs
* `assertObjectsEqual()`: assert objects
* `countLetters()`: count letters
* `countOnly()`: count names in objects
* `eqArrays()`: compare arrays are equal or not
* `eqObjects()`: compare objects are equal or not
* `findKey()`: find the key
* `findKeyByValue()`: find the key based on the value
* `flatten()`: flatten a nested array
* `head()`: return the head  of an array
* `letterPositions()`: find the letter position in the array
* `loppyRefactor()`: console log numbers in certain range, and replace certain number which meet the requirements
* `map()`: create a copy of input array
* `middle()`: returns the most middle element in the array
* `pigLatin()`: convert string into pigLatin format
* `reverse()`: reverse a string
* `tail()`: return the array without first element
* `takeUntil()`: take the elements and return a new array until unexpected element
* `without()`: return a new array without unexpected element