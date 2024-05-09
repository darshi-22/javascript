let a=10
if(1)
    {
        let b=10
        var c=90
    }
console.log(a)
//console.log(b)
console.log(c)

//Scope in function--------------------------------------------------
function one(){
    const uname="DARSHI"
    function two() {
        const wsite="GIT"
        console.log(uname);
    }
    //console.log(wsite);
    two()
}
one()

//Scope in If-else------------------------------------------------------
if(1)
    {
        const uname="darshi"
        if(uname==="darshi")
            {
                const wsite=" GIT"
                console.log(uname+wsite)
            }
            
    }