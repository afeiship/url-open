import fn from '../src';

describe('api.basic', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('url open will append anchor to body', () => {
    fn('https://www.baidu.com', { debug: true });
    const html = document.body.innerHTML;
    expect(html).toBe(
      '<a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer"></a>'
    );
  });

  test('url open can change target', () => {
    fn('https://www.baidu.com', { target: '_self', debug: true });
    const html = document.body.innerHTML;
    expect(html).toBe(
      '<a href="https://www.baidu.com" target="_self" rel="noopener noreferrer"></a>'
    );
  });

  test('url open should not append to body when debug not set to true', () => {
    fn('https://www.baidu.com', { target: '_self' });
    const html = document.body.innerHTML;
    expect(html).toBe('');
  });
});
