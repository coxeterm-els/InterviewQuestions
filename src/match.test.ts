import { matchArray } from './match.js';
import { assert, expect, test } from 'vitest';
test('should match an array in exact order', () => {
  const array1 = [1, 2, 3, 4, 5, 6];

  const array2 = [1, 2, 3, 4, 5, 6];

  const result = matchArray(array1, array2);

  expect(result).toBeTruthy();
});

test('should match array out of order', () => {
  const array1 = [1, 2, 3, 4, 5, 6];

  const array2 = [6, 2, 3, 4, 5, 1];

  const result = matchArray(array1, array2);

  expect(result).toBeTruthy();
});

test('should match array out of order with repeats', () => {
  const array1 = [1, 1, 1, 4, 5, 6];

  const array2 = [1, 6, 4, 5, 1, 1];

  const result = matchArray(array1, array2);

  expect(result).toBeTruthy();
});

test('should not match similar array', () => {
  const array1 = [1, 2, 3, 4, 5, 6];

  const array2 = [6, 2, 3, 4, 5, 8];

  const result = matchArray(array1, array2);

  expect(result).toBeFalsy();
});

test('should match not match different arrays', () => {
  const array1 = [1, 2, 3, 4];

  const array2 = [6, 2, 3, 4, 5, 1];

  const result = matchArray(array1, array2);

  expect(result).toBeFalsy();
});
