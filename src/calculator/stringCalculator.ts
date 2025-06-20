/**
 * Adds numbers from a string input.
 * Supports:
 * - empty string
 * - single number
 * - multiple numbers separated by commas or newlines
 * - multiple custom delimiters with any length (e.g. //[***][%]\n)
 * - throws error on negatives
 * - ignores numbers > 1000
 */
export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiters = /,|\n/;
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterSectionEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterSectionEnd);

    // Match multiple delimiters inside []
    const delimiterPatterns = delimiterSection.match(/\[.*?\]/g);

    if (delimiterPatterns) {
      // Escape special regex chars in each delimiter and join with |
      const escapedDelimiters = delimiterPatterns
        .map((d) => d.slice(1, -1).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
        .join("|");
      delimiters = new RegExp(escapedDelimiters);
    } else {
      // Single char delimiter without brackets
      delimiters = new RegExp(`[${delimiterSection}]`);
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
