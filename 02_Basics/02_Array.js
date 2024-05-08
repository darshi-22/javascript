//merge arrays

const marvel=new Array("IronMan","Thor","Thenos")
const indian=new Array("Krishna","Ram","Vishnu")

// marvel.push(indian)
// console.log(marvel)

// const allHeros=marvel.concat(indian)
// console.log(allHeros);

const all_new_heros=[...marvel,...indian]
console.log(all_new_heros);

const another_Array=[1,2,3,[7,8],[1,[2,3]],9]
const realArray=another_Array.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("DARSHI"))
console.log(Array.from("DARSHI"));

let score1=10
let score2=20
let score3=30
console.log(Array.of(score1,score2,score3));