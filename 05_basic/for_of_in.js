const myArr = [1,2,3,4,5,6,7,8,9,10]

for (const num of myArr) {
    console.log(num)
}

const name = "archit"
for (const latter of name) {
    console.log(latter)
}


const map = new Map() // map always maitain order and return unique value
map.set('sub1',45)
map.set('sub2',48)
map.set('sub3',78)
map.set('sub3',78)

console.log(map)

for (const [key , value] of map) {
    console.log(key +" marks is "+value)
}

// we can't use for of loop on object therefor we have for in loop

const myobj1 = {
    name : "archit",
    age : 19,
    city : "vadnagar"
}

for (const key in myobj1) {
    console.log(key)
}
 
// for in loop for array

for (const key in myArr) {  
    console.log(`number is ${myArr[key]}`)
}