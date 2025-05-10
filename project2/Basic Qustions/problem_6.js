// problem statemenet :- Find the Factorial of a Number

const number = 7
let fact = 1

if (number < 0) {
    console.log("Please enter a velid number")
} 
else {
    for ( i = 1; i <= number; i++) {
        fact = fact * i
    }
    console.log(`Factorial of ${number} is:${fact}`)
}
