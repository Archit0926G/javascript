// problem statement :- Find the GCD (Greatest Common Divisor) of Two Numbers

const num1 = 16
const num2 = 50

let smallNum = Math.min(num1 , num2)

for (let i = smallNum; i >= 1; i--) {
    if (num1%i == 0 && num2%i == 0) {
        console.log(i)
        break
    }
    
}