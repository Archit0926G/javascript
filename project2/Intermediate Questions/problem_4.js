// problem statement :- Find the LCM (Least Common Multiple) of Two Numbers

const num1 = 2
const num2 = 3

let lcm = Math.max(num1,num2)

while (true) {
    if (lcm%num1 == 0 && lcm%num2 == 0) {
        break
    }   
    lcm++ 
}

console.log(`LCM of ${num1} and ${num2} is :- ${lcm}`)