/**
 * Challange: Create a function that can compare two arrays where the order does not matter.
 */
export function matchArray<T>(array1: T[], array2: T[]): boolean {
  /* Fill this bit in */
  if (array1.length !== array2.length) {
    return false;
  }

  // Sort the arrays
  const sortedArray1 = array1.slice().sort();
  const sortedArray2 = array2.slice().sort();
  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }

  return true;
}
