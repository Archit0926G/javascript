//problem statement :- Count the Number of Vowels and Consonants in a String

let string = "HELLO MY NAME IS ARCHIT"
let countOfVowels = 0
let countOfConsonants = 0

for (let i = 0; i < string.length; i++) {
    let vowels = string[i].toLowerCase()
    if (vowels == 'a' || vowels == 'e' || vowels == 'i' || vowels == 'o' || vowels == 'u') {
        countOfVowels++
    }
    else{
        countOfConsonants++
    }
}

console.log(`we have ${countOfVowels} Vowels and ${countOfConsonants} Consonants in this string "${string}"`)
