// problem statemenet :- Sum of Digits of a Number

let number = 1234
let sum = 0

while (number > 0) {
    let remainder = number % 10
    sum = sum + remainder 
    number = Math.floor(number / 10)
}

console.log(sum)
