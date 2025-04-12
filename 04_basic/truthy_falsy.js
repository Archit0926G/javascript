const userEmail = "archit@google.com"

if (userEmail) {
    console.log("get email ID")
}else{
    console.log("don't get email")
}

// falsy value => flase , 0 , -0 , bigINt 0n , "" , null , undefine , Nan
// terthy value => true , "0" , 'flase' , " " , [] , {} , funcation(){} 

if (userEmail.length ===  0) {
    console.log("get email ID")
}

const emptyObj = {}

if ((Object.keys(emptyObj)).length === 0) {
    console.log("get email ID")
}

console.log(false == 0)
console.log(false == "")
console.log(0 == "")