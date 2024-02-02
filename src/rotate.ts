/**
 * Challange: Create a function that rotates a matrix of numbers by 90 degrees clockwise.
 *
 */

export function rotateMatrixClockwise90(matrix: number[][]): number[][] {
  if (matrix.length === 0) {
    return [];
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create a new matrix to store the rotated values
  const rotatedMatrix: number[][] = new Array(cols)
    .fill(0)
    .map(() => new Array(rows).fill(0));

  // Iterate over the original matrix and fill in the rotated values
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      rotatedMatrix[j][rows - 1 - i] = matrix[i][j];
    }
  }

  return rotatedMatrix;
}
