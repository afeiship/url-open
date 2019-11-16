(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var RETURN_VALUE = function(value) { return value; };

  nx.filter = function(inValue, inItems) {
    var items = inItems || [RETURN_VALUE];
    return items.reduce(function(item1, item2) {
      return item2(item1);
    }, inValue);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filter;
  }
})();
