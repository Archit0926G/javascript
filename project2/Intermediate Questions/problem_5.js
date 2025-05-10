// problem statement :- Armstrong Number Check

const number = 15
let sum = 0
let temp = number

while (temp > 0) {
    let remainder = temp%10
    sum = sum + remainder**3
    temp = parseInt(temp/10)
}

if (number == sum) {
    console.log(`entered nnumber ${number} is Armstrong number sum is ${sum}`)
}
else{
    console.log(`entered nnumber ${number} is not Armstrong number sum is ${sum}`)
}