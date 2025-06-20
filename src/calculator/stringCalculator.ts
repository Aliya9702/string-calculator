/**
 * Adds numbers from a string input.
 * Supports:
 * - empty string
 * - single number
 * - multiple numbers separated by commas or newlines
 * - custom single-character delimiter
 * - throws error on negatives
 * - ignores numbers > 1000
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

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  // Ignore numbers greater than 1000
  const filtered = nums.filter((n) => n <= 1000);

  const sum = filtered.reduce((acc, val) => acc + val, 0);
  return sum;
}
