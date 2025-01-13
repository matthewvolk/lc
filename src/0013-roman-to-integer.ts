/**
 * Time Complexity: O(n)
 * The for loop must run at least once for each character in
 * string `s`.
 *
 * Space Complexity: O(1)
 * The largest variable we create is `map` which is always
 * constant due to the constraints of the problem.
 */
export function romanToInt(s: string) {
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let accum = 0;
  const split = s.split("");

  for (let i = 0; i < split.length; i++) {
    const curr = map.get(split[i]);
    const next = map.get(split[i + 1]);

    if (!curr) throw new Error("string invalid");

    if (next && next > curr) {
      accum -= curr;
      continue;
    }

    accum += curr;
  }

  return accum;
}
