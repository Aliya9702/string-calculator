/**
 * Adds numbers from a string input.
 * - Returns 0 for empty string.
 * - Returns the number itself for a single number input.
 */
export function add(numbers: string): number {
  if (!numbers) return 0;

  // Handle single number input
  return parseInt(numbers);
}
