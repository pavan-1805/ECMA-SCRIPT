console.log("DEFAULT PARAMETERS");
console.log(
  `Default parameters are the parameters which are passed to a function when we dont have any arguments to pass `
);
const myFunc = (a,b='kalishetti') => {
    console.log(a,b);
}
myFunc('pavan','kali')
myFunc('pavan')
