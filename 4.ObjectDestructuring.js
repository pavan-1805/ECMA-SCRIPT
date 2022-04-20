console.log("OBJECT DESTRUCTURING");
const myObj = {
  name: "pavan",
  mName: "sai",
  age: 24,
};
console.log(myObj);
// const {name,mName,age}=myObj
// console.log(name,mName,age);

//OR

// let name,mName,age;
// ({name,mName,age}=myObj)
// console.log(name,mName,age);

//ALIASING
const {name:myName,mName,age}=myObj
console.log(myName,mName,age);
