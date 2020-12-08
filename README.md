# kmap-solver-lib

This is a utility function that is using in `kmap-solver` to solve Karnaugh Maps up to 4 variables.



## installation

```
npm i kmap-solver-lib
```



## usage

`kmap-solver-lib` takes 3 parameters. //.....

```javascript
type KMapCell = {
  binary: string;
  decimal: number;
  row: number;
  col: number;
}

type KMapResult = {
  groups: KMapCell[][];
  expression: string;
}

solve(variables: string[], minterms: number[], dontcares?: number[]): KMapResult;
```



```javascript
const solve = require('kmap-solver-lib');

const variables = ['x', 'y', 'z'];
const minterms = [0, 1, 3, 4, 5, 6];

// placement
// 0 | 1
// 2 | 3
// 6 | 7
// 4 | 5

// optional
// const dontcares = []

solve(variables, minterms);
// output
/*
{
    groups: [
      [
        { binary: '000', decimal: 0, row: 0, col: 0 },
        { binary: '001', decimal: 1, row: 0, col: 1 },
        { binary: '100', decimal: 4, row: 3, col: 0 },
        { binary: '101', decimal: 5, row: 3, col: 1 }
      ],
      [
        { binary: '011', decimal: 3, row: 1, col: 1 },
        { binary: '001', decimal: 1, row: 0, col: 1 }
      ],
      [
        { binary: '110', decimal: 6, row: 2, col: 0 },
        { binary: '100', decimal: 4, row: 3, col: 0 }
      ]
    ],
    expression: `y' + x'z + xz'`
}


```

