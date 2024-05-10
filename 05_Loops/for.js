for(let i=1;i<=10;i++){
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i+'*'+j+'='+i*j);
        
    }
}
console.log("*********************************************************");
let myArr=["darshi","swara","mahi"]
let n=myArr.length
for(let i=0;i<n;i++){
    console.log(myArr[i]);
}

console.log("Break");
for(let i=1;i<=10;i++)
    {
        if(i==5) break;
        console.log(i);

    }

console.log("Continue");
for(let i=1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
}