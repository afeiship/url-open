/*!
 * name: @jswork/next-filter
 * description: Filter for next.
 * homepage: https://github.com/afeiship/next-filter
 * version: 1.0.0
 * date: 2020-11-22 17:34:00
 * license: MIT
 */

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
