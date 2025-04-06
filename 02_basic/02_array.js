const myArr = [1,2,3,4,5]
const myArr2 = [6,7,8,9,10]
const myArr3 = [11,12,13,14,15]

// myArr.push(myArr2)  // this code line give array into array like this [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]
// console.log(myArr)
// console.log(myArr[5][2])

const allNum = myArr.concat(myArr2)  //here conat merge to array 
console.log(allNum)

const allMyarr = [...myArr,...myArr2,...myArr3]  // this method call spread opretor 
console.log(allMyarr)

const mixedArr =[1,2,[4,5],6,7,[8,[9,10]]]
console.log(mixedArr.flat(Infinity))   // here flat concat all array 


console.log(Array.isArray("Archit"))   //check given element is array or not
console.log(Array.from("Archit"))   // convert string into array

// convert object into array

console.log(Array.from({name:"Archit"}))  // it give enpty array
console.log(Array.from(Object.entries({name: "Archit"})))  // this Object.entries convert all object into array
console.log(Array.from(Object.keys({name: "Archit"})))     // this Object.keys convert keys into array
console.log(Array.from(Object.values({name: "Archit"})))   // this Object.values convert values into array


const value1 = 10
const value2 = 20
const value3 = 30

console.log(Array.of(value1,value2,value3))  // convert diffrent element into array
