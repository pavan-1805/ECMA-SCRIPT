console.log("Template Strings/Literals");
const a = "pavan";
const b = "sai";
console.log(a + " " + b);
console.log(`${a} ${b}`);

console.log("Template Strings/Literals - METHODS");
const str = "pandhi";
console.log(`${str}`.startsWith("p")); //true or false
console.log(`${str}`.endsWith("p")); //true or false
console.log(`${str}`.includes("pand")); //true or false
console.log(`${str}`.charAt(0)); //char at 0th position
console.log(`${str}`.charCodeAt(0)); //number
console.log(`${str}`.codePointAt()); //number
console.log(`${str}`.concat(" inko pandhi")); //concatinate
console.log(`${str}`.indexOf("n")); //position
console.log(`${str}`.lastIndexOf("i")); //position
console.log(`${str}`.length); //gives length
console.log(`${str}`.localeCompare("pn")); //gives 0 if string equals, -1 if string not equals, 1 if comparable string is in main string
console.log(`${str}`.match('pand')); //
console.log(`${str}`.repeat(5)); //
console.log(`${str}`.replace('pan','pan')); //
console.log(`${str}`.search('n')); //
console.log(`${str}`.slice(0,2))
