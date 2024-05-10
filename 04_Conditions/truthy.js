const userEmail=null
if(userEmail){
    console.log("true login");
}
else{
    console.log("false login");
}

//Nullish Coalscing Operator(??)

let val
//val=5??10
//val=null??10
val=undefined??15
console.log(val);

//Terniary Operator
let icetea=2
icetea>5 ? console.log("Price is high") : console.log("Price is Low");