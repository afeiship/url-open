var nx = require('next-js-core2');
require('../src/next-filter');

var addMore = require('./filters/add-more');
var addZero = require('./filters/add-zero');

describe('api.test', () => {
  test('[single filter]: value: aaa, addMore 111/999 should return 111aaa999', function() {
    var res = nx.filter('aaa', [addMore(111, 999)]);
    expect(res).toBe('111aaa999');
  });

  test('[multiple filter]: should return 0111aaa9990', function() {
    var res = nx.filter('aaa', [
      addMore(111, 999),
      addZero()
    ]);
    expect(res).toBe('0111aaa9990');
  });
});
