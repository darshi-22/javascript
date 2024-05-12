//FILTER

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> num>4)
console.log(newNums);

const newNum=myNums.forEach((item)=>{
    if(item>4){
        console.log(item);
    }
})

const books=[
    {
        name:"book1",
        genre:"history",
        year:2000
    },
    {
        name:"book2",
        genre:"maths",
        year:1995
    },
    {
        name:"book3",
        genre:"history",
        year:2001
    },
    {
        name:"book4",
        genre:"env",
        year:2000
    },
]

const userBooks=books.filter((book)=>book.genre==="history")
console.log(userBooks);

const userBooks1=books.filter((book)=>book.genre==="history" && book.year>2000)
console.log(userBooks1);

//MAP

console.log("MAP");

const num=[1,2,3,4,5];
const newMap=num.map((num)=>num+10)
console.log((newMap));

const mapFinal=num
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>40)
console.log(mapFinal);