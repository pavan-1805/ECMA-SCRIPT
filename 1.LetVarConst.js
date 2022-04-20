console.log("LET-VAR-CONST");
function pavan() {
    if(true){
        var a = 'sai'
        let b = 'sai'
        const c = 'sai'
        console.log(a,b,c);
    }
    console.log(a,b,c); //here we dont have b and c values, beacuse they are declared with let and const
}
pavan()
