import { assert, expect, test } from 'vitest';
import { splitArray } from './split.js';

test('should split an array into two', () => {
  const inputArray: number[] = [1, 2, 3, 4, 5, 6];

  const expectedArray: number[][] = [
    [1, 3, 5],
    [2, 4, 6],
  ];
  const actual = splitArray(inputArray);

  expect(actual).toEqual(expectedArray);
});

test('should split into unevent arrays', () => {
  const inputArray: number[] = [1, 2, 3];

  const expectedArray: number[][] = [[1, 3], [2]];
  const actual = splitArray(inputArray);

  expect(actual).toEqual(expectedArray);
});

test('should handle an empty matrix', () => {
  const inputArray: number[] = [];

  const expectedArray: number[][] = [[], []];
  const actual = splitArray(inputArray);

  expect(actual).toEqual(expectedArray);
});
