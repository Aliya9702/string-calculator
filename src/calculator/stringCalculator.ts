/**
 * Adds numbers from a string input.
 * Supports empty string, single number,
 * and two numbers separated by comma.
 */
export function add(numbers: string): number {
  if (!numbers) return 0;

  // Split by comma or newline using regex
  const parts = numbers.split(/,|\n/);

  // Sum all numbers
  const sum = parts.reduce((acc, val) => acc + parseInt(val), 0);

  return sum;
}
