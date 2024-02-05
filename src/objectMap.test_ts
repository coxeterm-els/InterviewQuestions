import { buildMapOfObjectsInObject } from './objectMap.js';
import { assert, expect, test } from 'vitest';
test('should build a map of this object', () => {
  const inputObject = {
    a: {
      b: {
        c: 1,
        d: {
          e: 2,
        },
      },
      f: 3,
    },
    g: 4,
  };

  const actual = buildMapOfObjectsInObject(inputObject);

  const expected = new Map([
    ['a.b.c', 1],
    ['a.b.d.e', 2],
    ['a.f', 3],
    ['g', 4],
  ]);

  expect(actual).toEqual(expected);
});
