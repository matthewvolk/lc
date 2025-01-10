# Space Complexity

Space complexity measures how your total required memory grows with input size. You usually only keep the fastest-growing factor in that measurement. If an algorithm uses multiple data structures, you account for all of them, but when you combine terms, you only retain the dominant one. For example:

- If you have one data structure that grows linearly (O(n)) and another that’s constant (O(1)), you’d end up with O(n) overall.
- If you have data structures that grow O(n) and O(n^2), you get O(n^2) overall.

Two Sum:

```ts
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const match = map.get(target - current);
    if (match !== undefined) return [match, i];
    map.set(current, i);
  }

  return [-1, -1];
}
```

Suppose we add another variable to the body of the loop:

```diff
for (let i = 0; i < nums.length; i++) {
  const current = nums[i];
- const match = map.get(target - current);
+ const complement = target - current
+ const match = map.get(complement)
  if (match !== undefined) return [match, i];
  map.set(current, i);
}
```

Even though we are adding an extra variable to the loop, we are not impacting space complexity.

Local variables do reside on the call stack, and each time the loop runs, a tiny amount of stack space is used for that variable (which is then reclaimed automatically when the iteration finishes or the function exits)...however, in the worst case, the map data structure can hold up to _n_ entries (the total size of the array). That overshadowing effect makes small memory allocations irrelevant when describing Big-O space complexity.

## In Practice

The last point brings up an interesting observation that bridges the gap between theoretical computer science and practical programming; while the algorithms below both have the same space complexity of O(n), the second version is more efficient in practice:

```ts
// Version 1: O(n) space, but creates two strings
function isPalindrome(x: number): boolean {
  return x.toString() === x.toString().split("").reverse().join("");
}

// Version 2: O(n) space, but creates only one string
function isPalindrome(x: number): boolean {
  const str = x.toString();
  return str === str.split("").reverse().join("");
}

// If x is 12345:

// Version 1:
x.toString(); // Allocates "12345" in memory
x.toString(); // Allocates another "12345" in memory

// Version 2:
const str = x.toString(); // Allocates "12345" in memory once
str; // References existing string, no new allocation
str; // References existing string, no new allocation
```

Both have O(n) space complexity, but Version 2 uses nearly half the memory that Version 1 uses.

While Big O notation is crucial for helping us understand the scalability of a program at a high level, meticulous optimizations like the ones applied above are equally important for helping us write more efficient software.
