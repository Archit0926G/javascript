//problem statement :- Create a program that finds and prints the first character that repeats in a given string

let str = "hette"
let strInlowecase = str.toLowerCase()

for (let i = 0; i < strInlowecase.length; i++) {
    let char = strInlowecase[i]

    if (strInlowecase.indexOf(char) != i) {
        console.log(`First repeating character is ${char} in "${str}`)
        return
    }
}
console.log(`No repeating characters found in "${str}"`)

