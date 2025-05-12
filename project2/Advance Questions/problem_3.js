//problem statement :- Write a logic that counts the frequency of each word in a sentence, without using built-in map functions.

let sentence = "my name is Archit is"
let str = sentence.split(" ")
let counter = {}

for (let i = 0; i < str.length; i++) {
    let word = str[i]


    if (counter[word]) {
        counter[word] = counter[word] + 1 

    }
    else {
        counter[word] = 1
    }
}
console.log(counter)