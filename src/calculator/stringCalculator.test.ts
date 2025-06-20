import { add } from "./stringCalculator";

describe("String Calculator - Step 8", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return number for single number input", () => {
    expect(add("5")).toBe(5);
  });

  test("should return sum for two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should support newlines as separators", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw error on negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negatives not allowed: -2, -4");
  });

  test("should ignore numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001,3")).toBe(1003);
  });
});
