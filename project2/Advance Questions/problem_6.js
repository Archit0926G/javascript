//problem statement :- Write logic to count how many words are in a sentence. Avoid using .split() if possible.

let sentence = "this is an apple"
let charCount = sentence.length

for (let i = 0; i < sentence.length; i++) {
    
    if (sentence[i] == " ") {
        charCount--
    }
    
}

console.log(charCount)



