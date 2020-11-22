(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.filter = function (inValue, inItems) {
    var items = inItems || [ nx.stubValue ];
    return items.reduce(function (item1, item2) {
      return item2(item1);
    }, inValue);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filter;
  }
})();
