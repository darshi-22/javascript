const mySym=Symbol("key1")
const jsUser={
    name:"Darshi",
    "fullname":"Darshi Shah",
    [mySym]:"mysymbol1",
    age:22,
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLogin:["Sat","Sun"]
}
console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser.fullname);
console.log(jsUser["fullname"]);
console.log(jsUser.mySym);
console.log(jsUser[mySym]);

jsUser.email="def@gmail.com"
console.log(jsUser.email);
//Object.freeze(jsUser)
jsUser.email="abc@gmail.com"
console.log(jsUser.email);

jsUser.greeting=function(){
    console.log("Hello Js User");
}
jsUser.greeting2=function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

