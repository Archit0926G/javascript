const myArr =[0,1,2,3,4,5,6]
console.log(myArr[1])
console.log(myArr.length)

const myFri = new Array("het" ,"ashok","adarsh")
console.log(myFri[0])

myArr.push(7)  //Add new element at last of array
myArr.push(8)
console.log(myArr)

myArr.pop()    //remove last element of array
console.log(myArr)

myArr.unshift(99) // add element at beging of array
console.log(myArr)

myArr.shift() //remove element form starting position in array
console.log(myArr)

console.log(myArr.includes(7))  
console.log(myArr.includes(9))
console.log(myArr.indexOf(5))

const newArr = myArr.join()  // it convert array in to string

console.log(typeof newArr)
console.log(myArr)
console.log(newArr)

console.log("orignal array", myArr)


const arr1 = myArr.slice(1,5)   // it give block of that element which elemet's index we mension but it don't change orignal array
console.log("sliced array :-",arr1)
console.log("orignal array :-", myArr)



const arr2= myArr.splice(5)  // it give block of that element which elemet's index we mension but that block of element are removed from orignal arraty
console.log("spliced array :-",arr2)

console.log("orignal array :-", myArr)


