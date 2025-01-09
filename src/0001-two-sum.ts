/**
 * Time Complexity: O(n²)
 * Because of the nested looping, iterations increase quadratically
 * with the size of the array.
 *
 * Space Complexity: O(1)
 * Only a limited set of variables are used, irrespective of the input
 * size.
 */
export function bruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    // j = i + 1 because we don't want to scan numbers we've already
    // seen
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [-1, -1];
}

/**
 * Time Complexity: O(n)
 * We only pass through the array once, with constant time operations
 * for each element.
 *
 * Space Complexity: O(n)
 * In the worst case, the Map can potentially store all elements from
 * the list.
 */
export function twoSum(nums: number[], target: number): number[] {
  // Maps allow for numbers as keys, as opposed to plain Javascript
  // objects that implicitly coerce number keys to strings
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const match = map.get(target - current);
    if (match !== undefined) return [match, i];
    map.set(current, i);
  }

  return [-1, -1];
}
