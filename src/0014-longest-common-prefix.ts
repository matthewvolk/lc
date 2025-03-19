/**
 * Time Complexity: O(nm)
 * Where n is the num of strings, and m is the length of the longest common
 * prefix.
 *
 * Space Complexity: O(1)
 * We're only storing the prefix string.
 *
 * Edge cases:
 * - Array with one string
 * - Strings of different lengths
 * - Empty strings within the array.
 *
 * DSA's:
 * - Vertical scanning vs. horizontal scanning
 * - With horizontal scanning, once we find a prefix that is not common between
 *   any two strings, we know it can't be part of the final answer, regardless
 *   of what other strings might share. We can optimize by using the first
 *   string as a reference and progressively shrink it as we compare it with
 *   each subsequent string.
 */
export function longestCommonPrefix(strs: string[]) {
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}
