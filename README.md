# next-filter
> Filter for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-filter
```

## usage
```js
import '@jswork/next-filter';

// single filter
const res1 = nx.filter('aaa', [addMore(111, 999)]);                 

//res1: '111aaa999'

// multiple filter
const res2 = nx.filter('aaa', [ 
  addMore(111, 999), 
  addZero() 
]);    

//res2: 0111aaa9990
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-filter/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-filter
[version-url]: https://npmjs.org/package/@jswork/next-filter

[license-image]: https://img.shields.io/npm/l/@jswork/next-filter
[license-url]: https://github.com/afeiship/next-filter/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-filter
[size-url]: https://github.com/afeiship/next-filter/blob/master/dist/next-filter.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-filter
[download-url]: https://www.npmjs.com/package/@jswork/next-filter
