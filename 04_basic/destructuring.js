const myArr = [10,20,30,40,50,60]

let [a,b,c,d,...rest] = myArr
console.log(a,b,c,d,rest)

const obj1 = {
    firstName : "archit",
    lastName : "thakkar",
    age : 19,
    city : "vadnagar"
}

const {firstName : name1 , lastName : name2} = obj1 // destructuring of object
console.log(name1 + name2)

let newArr = [10,20,30]

let obj2 = {...newArr}  // here we put array into object index become keys 
console.log(obj2)