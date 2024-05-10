if(2==="2")
    {
        console.log("true");
    }

const bal=1000;
if(bal<200) console.log("less balance");
else if(bal<400) console.log("less bal");
else console.log(`Okayish balance ${bal}`);

const userLoggedIn=true
const debitCard=false
if(userLoggedIn && debitCard)
    {
        console.log("Allowed to buy course");
    }
    else{
        console.log("Not allowed");
    }

if(userLoggedIn || debitCard){
    console.log("Login is alowed");
}
else{
    console.log("Login is not allowed");
}
