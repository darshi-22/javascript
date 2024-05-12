//FOR-OF:-
arr=[10,20,30,40,50]
for(const i of arr){
    console.log(i);
}

const greeting="Hello World!"
for(const i of greeting){
    console.log(i);
}

/**************************************************************** */

//FOR-IN:-
const myObj={
    cpp:"c++",
    rb:"ruby"
}
for(const i in myObj){
    console.log(`${i} shortcut is for ${myObj[i]}`);
}

const programming=["cpp","python","ruby","java"]
for(const key in programming){
    console.log(programming[key]);
}

//FOR-EACH

const coding=["I","hate","coding"]
// coding.forEach(function(val){
//     console.log(val);
// })

coding.forEach((item)=>{
    console.log(item);
})

const shop=[
    {
        name:"pen",
        price:20
    },
    {
        name:"pencil",
        price:30
    },
    {
        name:"eraser",
        price:10
    }
]
shop.forEach((item)=>{
    console.log(`${item.name} is the item and price is ${item.price}`);
})