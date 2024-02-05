/**
 * Challenge, write a recursive funtion that builds a map of an object,
 * where the full path to the property is the key, and the properties value is the value.
 * e.g.
 *
 *  const inputObject = {
 *  a: {
 *    b: {
 *      c: 1,
 *      d: {
 *        e: 2,
 *      },
 *    },
 *    f: 3,
 *  },
 *  g: 4,
 * };
 *
 * Output:
 * Map {
 *   'a.b.c' => 1,
 *   'a.b.d.e' => 2,
 *   'a.f' => 3,
 *   'g' => 4,
 * }
 *
 */

export function buildMapOfObjectsInObject(
  inputObject: Record<string, any>
): Map<string, any> {
  /* Fill this bit in */
  const result = new Map<string, any>();

  return result;
}
