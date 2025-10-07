export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Dcano";
  }

 if (query.toLowerCase().includes("andrew id")) {
    return "Dcano";
  }
  const lowerQuery = query.toLowerCase();

  const plusMatch = lowerQuery.match(/what(?:'s| is)? (\d+)\s+plus\s+(\d+)/);
  if (plusMatch) {
    const num1 = parseInt(plusMatch[1], 10);
    const num2 = parseInt(plusMatch[2], 10);
    return (num1 + num2).toString();
  }

  const minusMatch = lowerQuery.match(/what(?:'s| is)? (\d+)\s+minus\s+(\d+)/);
  if (minusMatch) {
    const num1 = parseInt(minusMatch[1], 10);
    const num2 = parseInt(minusMatch[2], 10);
    return (num1 - num2).toString();
  }

  const timesMatch = lowerQuery.match(/what(?:'s| is)? (\d+)\s+(?:times|multiplied by)\s+(\d+)/);
  if (timesMatch) {
    const num1 = parseFloat(timesMatch[1]);
    const num2 = parseFloat(timesMatch[2]);
    return (num1 * num2).toString();
  }

  const divideMatch = lowerQuery.match(/what(?:'s| is)? (\d+)\s+(?:divided by|over)\s+(\d+)/);
  if (divideMatch) {
    const num1 = parseFloat(divideMatch[1]);
    const num2 = parseFloat(divideMatch[2]);
    if (num2 === 0) return "Cannot divide by zero";
    return (num1 / num2).toString();
  }

  const largestMatch = lowerQuery.match(
    /which of the following numbers is the largest[:\s]*([\d,\s]+)/,
  );
  if (largestMatch) {
    const numbers = largestMatch[1]
      .split(/[\s,]+/)
      .filter(Boolean)
      .map((n) => parseFloat(n));

    if (numbers.length > 0) {
      const maxNumber = Math.max(...numbers);
      return maxNumber.toString();
    }
  }

  const lowestMatch = lowerQuery.match(
    /which of the following numbers is the (?:lowest|smallest)[:\s]*([\d,\s]+)/,
  );
  if (lowestMatch) {
    const numbers = lowestMatch[1]
      .split(/[\s,]+/)
      .filter(Boolean)
      .map((n) => parseFloat(n));
    if (numbers.length > 0) {
      const minNumber = Math.min(...numbers);
      return minNumber.toString();
    }
  }

  return "";
  
 
}


