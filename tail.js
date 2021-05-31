const tail = function(array) {
  if (array.length === 0) {
    return array;
  }
  let res = array;
  return res.slice(1);
};


module.exports = tail;