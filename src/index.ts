const defaults = {
  target: '_blank',
  rel: 'noopener noreferrer',
  debug: false
};

export default (url, options?) => {
  const opts = { ...defaults, ...options };
  const { debug, ...stdOpts } = opts;
  const a = document.createElement('a');
  a.setAttribute('href', url);
  for (const key in stdOpts) a.setAttribute(key, opts[key]);
  if (debug) document.body.appendChild(a);
  a.click();
};
