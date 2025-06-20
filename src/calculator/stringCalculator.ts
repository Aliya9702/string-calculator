/**
 * Adds numbers from a string input.
 * Supports:
 * - empty string
 * - single number
 * - multiple numbers separated by commas or newlines
 * - custom delimiters of any length like //[***]\n
 * - throws error on negatives
 * - ignores numbers > 1000
 */
export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiters = /,|\n/;
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    // Handle custom delimiter(s)
    const delimiterSectionEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterSectionEnd);

    // Check for delimiters wrapped in []
    if (delimiterSection.startsWith("[")) {
      // Extract delimiter(s)
      const delimiterPatterns = delimiterSection.match(/\[.*?\]/g) || [];
      // Escape special regex chars in delimiters and join them with |
      const escapedDelimiters = delimiterPatterns
        .map((d) => d.slice(1, -1).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
        .join("|");
      delimiters = new RegExp(escapedDelimiters);
    } else {
      // Single character delimiter without brackets
      const delimiter = delimiterSection;
      delimiters = new RegExp(`[${delimiter}]`);
    }

    numberString = numbers.slice(delimiterSectionEnd + 1);
  }

  const parts = numberString.split(delimiters);
  const nums = parts.map(Number);

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  const filtered = nums.filter((n) => n <= 1000);
  const sum = filtered.reduce((acc, val) => acc + val, 0);
  return sum;
}
