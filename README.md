# next-filter
> Filter for next.

## installation
```bash
npm install -S @feizheng/next-filter
```

## usage
```js
import nx from '@feizheng/next-js-core2';
import '@feizheng/next-filter';

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
