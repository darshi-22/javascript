//Singleton -> using constructor 
const jsUser=new Object()
console.log(jsUser);

jsUser.userId=1
jsUser.name="DARSHI"
jsUser.isLoggedIn=false

const regUser={
    email:"abc@gmail.com",
    fullname:{
        username:{
            firstname:"darshi",
            lastname:"shah"
        }
    }
}
console.log(regUser.fullname.username.lastname);

console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));
//merge object

const obj3={
    a:1,
    b:2
}
const obj4={
    c:3,
    d:4
}
// const mergeObj1={obj3,obj4}
// console.log(mergeObj1);

const obje1=Object.assign(obj3,obj4)
console.log(obje1);

const obj1={
    a:1,
    b:2
}
const obj2={
    c:3,
    d:4
}
const mergeObj={...obj1,...obj2}
console.log(mergeObj);

//Array of object------------------------------------------------------>

const Users=[
    {
        id:1,
        name:"abc"
    },
    {
        id:2,
        name:"def"
    }
]
console.log(Users[1].id)

//Destructuring------------------------------------------------------------------>

const{email:mail}=regUser
console.log(mail);




