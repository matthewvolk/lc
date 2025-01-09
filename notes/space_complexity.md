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
