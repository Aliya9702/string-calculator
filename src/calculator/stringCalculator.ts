/**
 * Adds numbers from a string input.
 * Supports:
 * - empty string
 * - single number
 * - multiple numbers separated by commas or newlines
 * - custom single-character delimiter syntax: "//[delimiter]\n[numbers]"
 */
export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiters = /,|\n/; // default delimiters

  let numberString = numbers;

  // Check for custom delimiter syntax at the start
  if (numbers.startsWith("//")) {
    // Extract delimiter, e.g. "//;\n1;2"
    const delimiter = numbers[2];
    delimiters = new RegExp(`[${delimiter}\n]`);
    numberString = numbers.slice(4); // remove the first line
  }

  // Split by delimiters (comma/newline or custom)
  const parts = numberString.split(delimiters);

  // Sum parsed numbers
  const sum = parts.reduce((acc, val) => acc + parseInt(val), 0);

  return sum;
}
