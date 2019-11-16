module.exports = function(a, b) {
  return function(inValue) {
    return a + inValue + b;
  };
};
