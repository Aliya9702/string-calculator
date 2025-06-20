import { add } from "./stringCalculator";

describe("String Calculator - Step 2", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return number for single number input", () => {
    expect(add("5")).toBe(5);
    expect(add("42")).toBe(42);
  });
});
