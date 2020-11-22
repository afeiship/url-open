(function () {
  require('../src');

  const addMore = require('./filters/add-more');
  const addZero = require('./filters/add-zero');

  describe('api.test', () => {
    test('[single filter]: value: aaa, addMore 111/999 should return 111aaa999', function () {
      const res = nx.filter('aaa', [addMore(111, 999)]);
      expect(res).toBe('111aaa999');
    });

    test('[multiple filter]: should return 0111aaa9990', function () {
      const res = nx.filter('aaa', [addMore(111, 999), addZero()]);
      expect(res).toBe('0111aaa9990');
    });
  });

})();
