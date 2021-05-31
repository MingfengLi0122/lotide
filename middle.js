

const middle = function(arr) {
  let mid = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return mid;
  } else {
    const start = 0;
    const end = arr.length - 1;
    const midIndex = Math.floor((start + end) / 2);
    if (arr.length % 2 === 0) {
      mid.push(arr[midIndex]);
      mid.push(arr[midIndex + 1]);
    } else {
      mid.push(arr[midIndex]);
    }
  }
  return mid;
};


module.exports = middle;