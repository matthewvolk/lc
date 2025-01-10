/**
 * Time Complexity: O(n) where n is the number of digits in x
 * This is because toString, split, reverse, join, and the ===
 * string comparison are all O(n), combining for a O(n) time
 * complexity
 *
 * Space Complexity: O(n) where n is the number of digits in x
 * Since toString creates a string of n chars, it takes O(n) space.
 * This happens twice, once for each toString on either side of the
 * comparison operator.The split method creates a new string of n
 * characters, which takes O(n) space. The reverse method modifies
 * the existing array in place, meaning it only takes O(1) extra
 * space. Finally,the join method creates another new string of n
 * characters meaning O(n) space complexity. Even though we create
 * multiple new strings and arrays, and even though reverse() only
 * takes O(1) space, we only retain the dominant one when we combine
 * terms.
 */
export function isPalindrome(x: number): boolean {
  return x.toString() === x.toString().split("").reverse().join("");
}
