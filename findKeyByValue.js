const findKeyByValue = function(obj, val) {
  for (let show in obj) {
    if(obj[show] === val) {
      return obj[show];
    }
  }
};

module.exports = findKeyByValue;
