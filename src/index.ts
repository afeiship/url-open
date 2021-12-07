const defaults = {
  target: '_blank',
  rel: 'noopener noreferrer'
};

export default (url, options?) => {
  const opts = { ...defaults, ...options };
  const a = document.createElement('a');
  a.setAttribute('href', url);
  for (const key in opts) a.setAttribute(key, opts[key]);
  a.click();
};
