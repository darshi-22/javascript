const myArr=[1,2,3,4,5]
console.log(myArr)

const myArr1=new Array(1,2,3)
console.log(myArr1)
console.log(myArr1[1]);

myArr1.push(6)
console.log(myArr1)
myArr1.pop()
console.log(myArr1)
myArr1.unshift(0)
console.log(myArr1);
myArr1.unshift(10)
console.log(myArr1);
myArr1.shift()
console.log(myArr1);
myArr1.shift()
console.log(myArr1);
console.log((myArr1.includes(1)));
console.log(myArr1.indexOf(4));

console.log("A ",myArr);
const arr1=myArr.slice(1,3)
console.log(arr1);

console.log("B ",myArr);
const arr2=myArr.splice(1,3)
console.log(arr2);

console.log(myArr);