import solve, { KMapResult } from '../src'
import test, { ExecutionContext } from 'ava';

test('f(x, y) = 0,1,3', (t: ExecutionContext) => {
  const expected: KMapResult = {
    groups: [
      [
        { binary: '00', decimal: 0, row: 0, col: 0 },
        { binary: '01', decimal: 1, row: 0, col: 1 }
      ],
      [
        { binary: '11', decimal: 3, row: 1, col: 1 },
        { binary: '01', decimal: 1, row: 0, col: 1 }
      ]
    ],
    expression: `x' + y`
  }

  t.deepEqual(solve(['x', 'y'], [0, 1, 3]), expected);
});

test('f(x, y) = 0,1,2,3', (t: ExecutionContext) => {
  const expected: KMapResult = {
    groups: [
      [
        { binary: '00', decimal: 0, row: 0, col: 0 },
        { binary: '01', decimal: 1, row: 0, col: 1 },
        { binary: '10', decimal: 2, row: 1, col: 0 },
        { binary: '11', decimal: 3, row: 1, col: 1 }
      ]
    ],
    expression: `1`
  }

  t.deepEqual(solve(['x', 'y'], [0, 1, 2, 3]), expected);
});

test('f(x, y, z) = 0,1,2,3,4,5,6', (t: ExecutionContext) => {
  const expected: KMapResult = {
    groups: [
      [
        { binary: '000', decimal: 0, row: 0, col: 0 },
        { binary: '001', decimal: 1, row: 0, col: 1 },
        { binary: '100', decimal: 4, row: 3, col: 0 },
        { binary: '101', decimal: 5, row: 3, col: 1 }
      ],
      [
        { binary: '010', decimal: 2, row: 1, col: 0 },
        { binary: '011', decimal: 3, row: 1, col: 1 },
        { binary: '000', decimal: 0, row: 0, col: 0 },
        { binary: '001', decimal: 1, row: 0, col: 1 }
      ],
      [
        { binary: '110', decimal: 6, row: 2, col: 0 },
        { binary: '010', decimal: 2, row: 1, col: 0 },
        { binary: '000', decimal: 0, row: 0, col: 0 },
        { binary: '100', decimal: 4, row: 3, col: 0 }
      ]
    ],
    expression: `y' + x' + z'`
  }

  t.deepEqual(solve(['x', 'y', 'z'], [0, 1, 2, 3, 4, 5, 6]), expected);
});

test('f(x, y, z) = 0,1,3,4,5,6', (t: ExecutionContext) => {
  const expected: KMapResult = {
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

  t.deepEqual(solve(['x', 'y', 'z'], [0, 1, 3, 4, 5, 6]), expected);
});

test('f(a, b, c, d) = 0,4,12,8,5,13,9,15,2,6,14,10', (t: ExecutionContext) => {
  const expected: KMapResult = {
    groups: [
      [
        { binary: '0000', decimal: 0, row: 0, col: 0 },
        { binary: '0010', decimal: 2, row: 0, col: 3 },
        { binary: '1000', decimal: 8, row: 3, col: 0 },
        { binary: '1010', decimal: 10, row: 3, col: 3 },
        { binary: '1100', decimal: 12, row: 2, col: 0 },
        { binary: '1110', decimal: 14, row: 2, col: 3 },
        { binary: '0100', decimal: 4, row: 1, col: 0 },
        { binary: '0110', decimal: 6, row: 1, col: 3 }
      ],
      [
        { binary: '0101', decimal: 5, row: 1, col: 1 },
        { binary: '0100', decimal: 4, row: 1, col: 0 },
        { binary: '1101', decimal: 13, row: 2, col: 1 },
        { binary: '1100', decimal: 12, row: 2, col: 0 }
      ],
      [
        { binary: '1001', decimal: 9, row: 3, col: 1 },
        { binary: '1000', decimal: 8, row: 3, col: 0 },
        { binary: '1101', decimal: 13, row: 2, col: 1 },
        { binary: '1100', decimal: 12, row: 2, col: 0 }
      ],
      [
        { binary: '1111', decimal: 15, row: 2, col: 2 },
        { binary: '1101', decimal: 13, row: 2, col: 1 },
        { binary: '1100', decimal: 12, row: 2, col: 0 },
        { binary: '1110', decimal: 14, row: 2, col: 3 }
      ]
    ],
    expression: `d' + bc' + ac' + ab`
  }

  t.deepEqual(solve(['a', 'b', 'c', 'd'], [0, 4, 12, 8, 5, 13, 9, 15, 2, 6, 14, 10]), expected);
});
