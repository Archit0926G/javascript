const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(numbers.map((num) => num + 10))

const newNum = numbers
.map((num) => num*10)
.map((num) => num + 1)
.filter((num) => num >= 80)
console.log(newNum)

// in map we can do any type of operation when in filter work like true or false