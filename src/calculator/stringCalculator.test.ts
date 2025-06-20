import { add } from "./stringCalculator";

describe("String Calculator - Step 4", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return number for single number input", () => {
    expect(add("5")).toBe(5);
  });

  test("should return sum for two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should return sum for unknown amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30,40")).toBe(100);
  });
});
