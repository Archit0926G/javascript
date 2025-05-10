// problem statement :- Check if a Number is Prime

const number = 3

if (number <= 1) {
    console.log(`${number} is not a prime number`);
} else {
    let isPrime = true

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        console.log(`${number} is prime`)
    }
    else{
        console.log(`${number} is not prime`)
    }
}



