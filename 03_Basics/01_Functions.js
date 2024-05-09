function setName(){
    console.log("DARSHI");
}
setName()

function addnum(n1,n2){
    console.log(`Addition is:`,n1+n2);
}
addnum(2,3)

function addnum1(n1,n2){
    let res=n1+n2
    return res
}
let result=addnum1(2,3)
console.log(result);

function login(name){
    console.log(`Username is:`,name);
}
login("DARSHI")

/**********************************************************************/

//REST OPERATOR 
function calPrice(...num)
{
    return num;
}
console.log(calPrice(100,200,300))

//Object in function
const user={
    uname:"DARSHI",
    price:199
}
function handleObj(anyObj){
    console.log(`Username is ${anyObj.uname} and price is ${anyObj.price}`);
}
handleObj(user)

//Array in function
const myArray=[10,20,20]
function retValue(getArray){
    return getArray[1]
}
console.log(retValue(myArray));