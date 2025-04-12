function sum(num1,num2){    // num1 and num2 are parameters
    console.log(num1+num2)
}

const numSum = sum(10,20)  // here we exicute the funcation and 10&20 are argument
console.log(numSum)    // ans = undefined beacause we don't return any thing in funcation


function sum2(num4,num5){
return num4+num5
}

const numSum2 = sum2(30,30)
console.log(numSum2) // here we return velue in funcation


function userLogin(userName){
    if(userName === undefined){
        console.log("plz enter name")
    }
    else{
    return `${userName} wellcome to website`}
}

console.log(userLogin("Archit"))

function myCart(...num1){  // here ... is rest oprater 
    return num1
}

console.log(myCart(200,500,600))

const obj = {
    name : "Archit" ,
    age : 19
}

function objHeldler(anyobject){
    return `hello my name is ${anyobject.name} and my age is ${anyobject.age}`
}

console.log(objHeldler(obj))
console.log(objHeldler({
    name : "het",
    age : 20
}))

const myArr = [100,200,300]

function printArr(getArr){
    return getArr[1]
}

console.log(printArr(myArr))
console.log(printArr([600,700,500]))  // Dairect decleration of array 