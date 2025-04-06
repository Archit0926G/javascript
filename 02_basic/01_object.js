const tempSym = Symbol()

const obj1 = {
    firstName : "Archit",
    "lastName" : "Thakkar" ,
    [tempSym] : Symbol("key1") ,   //symbol presentation in object  
    address : "vadnagar" , 
    age : 19,
    lastVisitdate : [1,11,20]
}

console.log(obj1.firstName)
console.log(obj1["lastName"])
console.log(typeof obj1[tempSym])

obj1.address = "visnagar"
// Object.freeze(obj1)  // after this we can't change object velue
obj1.address = "mumbai"
console.log(obj1.address)

obj1.welcome = function(){
    console.log(`welcome ${obj1.firstName} to website`)
}
console.log(obj1.welcome())