const userObj = {
    name : "Archit",
    age : 19,
    
    text : function(){
        console.log(`hello my name is ${this.name} my age is ${this.age}`)
        console.log(this)  // here this keyword give current context of object
    }
}

userObj.text()
userObj.name = "het"
userObj.age = 20
userObj.text()

console.log(this)

function tempFun(){
    let name = "ashok"
    console.log(this)
    console.log(this.name)  // we can't use this keyword in funcation it only used in object
}

tempFun()

const arrow = () => {
    let name = "adarsh"
    console.log(this)
}

const sum = (num1 , num2) => num1+num2
console.log(sum(10,20))

const obj = (name)=>({name:"Parth"})  // here we return object in arrow funcation
console.log(obj())