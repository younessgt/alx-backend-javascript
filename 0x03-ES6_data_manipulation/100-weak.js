/* eslint-disable */
export const weakMap = new WeakMap();
export function queryAPI(obj) {
  let count = weakMap.get(obj) || 0;
  count++;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(obj, count);
}
