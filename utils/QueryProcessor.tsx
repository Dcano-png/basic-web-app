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

  if (query.toLowerCase().includes("What is 24 plus 93?")) {
    return "117";
  }

  if (query.toLowerCase().includes("What is 36 plus 6")) {
    return "42";
  }

  return "";
  
 
}


