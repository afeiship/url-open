const defaults = {
  target: '_blank',
  rel: 'noopener noreferrer'
};

export default (url, options?) => {
  const opts = { ...defaults, ...options };
  const a = document.createElement('a'); //创建a标签
  a.setAttribute('href', url); //url即为需要打开的新页面的url
  for (const key in opts) {
    a.setAttribute(key, opts[key]);
  }
  a.click();
};
