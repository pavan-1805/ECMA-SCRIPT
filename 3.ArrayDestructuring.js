console.log("ARRAY DESTRUCTURING");
console.log(`the destructuring assignment syntax in javascript expression that makes it possible to upack values from array or
properties from objects into distinct variables`);
const arr = [1,2,3,4,5];

const [a,b,c,d,e]=arr;
console.log(a,b,c,d,e);

const [x,,,,y]=arr; //im accessing last number in an array
console.log(x,y);

let l,m;
[l,m]=arr
console.log(l,m);
