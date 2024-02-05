import { rotateMatrixClockwise90 } from './rotate.js';
import { assert, expect, test } from 'vitest';
test('should rotate a 2x2 matrix 90 degrees clockwise', () => {
  const inputMatrix: number[][] = [
    [1, 2],
    [3, 4],
  ];

  const expectedMatrix: number[][] = [
    [3, 1],
    [4, 2],
  ];

  expect(rotateMatrixClockwise90(inputMatrix)).toEqual(expectedMatrix);
});

test('should rotate a 3x3 matrix 90 degrees clockwise', () => {
  const inputMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const expectedMatrix: number[][] = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];

  expect(rotateMatrixClockwise90(inputMatrix)).toEqual(expectedMatrix);
});

test('should handle an empty matrix', () => {
  const inputMatrix: number[][] = [];

  expect(rotateMatrixClockwise90(inputMatrix)).toEqual([]);
});

test('should handle a 1x1 matrix', () => {
  const inputMatrix: number[][] = [[1]];

  expect(rotateMatrixClockwise90(inputMatrix)).toEqual([[1]]);
});

test('should handle a 4x2 matrix', () => {
  const inputMatrix: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ];

  const expectedMatrix: number[][] = [
    [7, 5, 3, 1],
    [8, 6, 4, 2],
  ];

  expect(rotateMatrixClockwise90(inputMatrix)).toEqual(expectedMatrix);
});
