// problem statemenet :- Check if a Number and string is a Palindrome

let string = 141

console.log(typeof string)

if (typeof string == 'number') {
    string = string.toString()
}

let p = true

for (let i = 0; i < string.length / 2; i++) {
    if (string[i] != string[string.length - 1 - i]) {
        p = false
        break
    }
}

if(p) {
    console.log(`${string} is a palindrom`)
} 
else {
    console.log(`${string} is not a palindrom`)
}
