const add=(n1,n2)=>{
    return n1+n2
}
console.log(add(1,2));

const add1=(n1,n2)=> n1+n2
console.log(add1(2,3));

const add2=(n1,n2)=> (n1+n2)
console.log(add2(2,5));

const add3=(n1,n2)=> {n1+n2}//undefined
console.log(add3(2,3));

