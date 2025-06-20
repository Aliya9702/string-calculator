import { add } from "./stringCalculator";

describe("String Calculator - Step 6", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return number for single number input", () => {
    expect(add("5")).toBe(5);
  });

  test("should return sum for two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should support newlines as separators", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support custom single-character delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n4|5|6")).toBe(15);
  });
});
