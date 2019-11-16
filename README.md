# next-filter
> Filter for next.

## installation
```bash
npm install -S afeiship/next-filter
```

## usage
```js
import 'next-filter';

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
