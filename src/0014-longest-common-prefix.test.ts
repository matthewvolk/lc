import { describe, expect, test } from "vitest";
import { longestCommonPrefix } from "./0014-longest-common-prefix";

describe("optimized", () => {
  test("case 1", () => {
    const strs = ["flower", "flow", "flight"];

    expect(longestCommonPrefix(strs)).toBe("fl");
  });

  test("case 2", () => {
    const strs = ["dog", "racecar", "car"];

    expect(longestCommonPrefix(strs)).toBe("");
  });
});
