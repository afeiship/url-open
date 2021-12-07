import fn from '../src';

// global.window = { location: { pathname: 'null' } };

// Object.assign(location, { pathname: null });

describe('api.basic', () => {
  test('normail single value case', () => {
    console.log(location.href);
    fn('https://www.baidu.com');
    console.log(location.href);
    // expect(fn({ rel: true })).toBe(undefined);
  });
});
