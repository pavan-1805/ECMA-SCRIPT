console.log("REST PARAMETERS");
console.log(
  `The rest parameter allows us to represent an indefinite number of arguments as an array. By using the rest parameter, a function can be called with any number of arguments`
);
const func = (...params)=>{
    console.log(params); //array of numbers
    console.log(...params); //separate values from array
    let total=0;
    params.forEach(numb => {
        total += numb        
    });
    console.log(total);
}
func(1,2,3,4,5,6)