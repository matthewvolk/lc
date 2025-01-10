import { describe, expect, test } from "vitest";
import { isPalindrome } from "./0009-palindrome-number";

describe("optimized", () => {
  test("case 1", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test("case 2", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test("case 3", () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
