export default function formatCount(number) {
  // Convert number into an integer (e.g., is number is provided as string '1')
  const integer = parseInt(number);

  // If integer is not a number, return 0
  if (!Number.isInteger(integer)) return 0;

  if (integer >= 1000 && integer < 100_000) {
    // Return number to rounded to one decimal place in 000s (e.g., 1450 => 1.5k)
    return `${Math.round(integer / 1000 * 10) / 10}k`;
  } else if (integer >= 100_000) {
    // Return integer in 000s (e.g., 230590 => 231k)
    return `${Math.round(integer / 1000)} k`;
  } else {
    // Return integer
    return Math.round(integer);
  }
}
