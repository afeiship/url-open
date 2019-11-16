var nx = require('next-js-core2');
require('../src/next-filter');

var addMore = require('./filters/add-more');
// var addZero = require('./filters/add-zero');
// var toString = require('./filters/to-string');

describe('api.test', () => {
  test('value: aaa, addMore 111/999 should return 111aaa999', function() {
    var res = nx.filter('aaa', [addMore(111, 999)]);
    expect(res).toBe('111aaa999');
  });
});
