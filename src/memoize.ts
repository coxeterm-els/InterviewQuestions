export type Func = (...args: any[]) => any;

/**
 * Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again. 
 * Example Usage:
 * function expensiveOperation(x, y) {
 *   console.log(`Calculating ${x} + ${y}`);
 *   return x + y;
 * }
 *
 * const memoizedOperation = memoize(expensiveOperation);
 *
 * console.log(memoizedOperation(2, 3)); // Should print: Calculating 2 + 3 \n 5
 * console.log(memoizedOperation(2, 3)); // Should not print anything and return 5 from cache
 * console.log(memoizedOperation(4, 5)); // Should print: Calculating 4 + 5 \n 9
 * console.log(memoizedOperation(4, 5)); // Should not print anything and return 9 from cache
 *
 */
export function memoize(func: Func): any {
    /* Fill this bit in */
    return undefined;
}