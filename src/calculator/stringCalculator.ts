/**
 * Adds numbers from a string input.
 * Supports:
 * - empty string
 * - single number
 * - multiple numbers separated by commas or newlines
 * - custom single-character delimiter
 * Throws error if negatives found, listing all negatives.
 */
export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiters = /,|\n/;
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    delimiters = new RegExp(`[${delimiter}\n]`);
    numberString = numbers.slice(4);
  }

  const parts = numberString.split(delimiters);
  const nums = parts.map(Number);

  // Check for negatives
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  const sum = nums.reduce((acc, val) => acc + val, 0);
  return sum;
}
