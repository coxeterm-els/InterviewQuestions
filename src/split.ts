/**
 * Challange: Create a function that take an array and evenly splits it into two arrays.
 * e.g.
 * [1,2,3 ] => [[1,3], [2]]
 * [1,2,3,4 ] => [[1,3], [2, 4]]
 * [] => [[],[]]
 **/

export function splitArray(inputArray: number[]): number[][] {
  const result: number[][] = [[], []];

  for (let i = 0; i < inputArray.length; i++) {
    result[i % 2].push(inputArray[i]);
  }

  return result;
}
