import { describe, expect, test } from "vitest";
import { romanToInt } from "./0013-roman-to-integer";

describe("optimized", () => {
  test("case 1", () => {
    expect(romanToInt("III")).toEqual(3);
  });

  test("case 2", () => {
    expect(romanToInt("LVIII")).toEqual(58);
  });

  test("case 3", () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });
});
