//problem statement :- Write logic to count how many words are in a sentence. Avoid using .split() if possible

let sentence = "this is an apple"
let wordCount = 1

for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] == " ") {
        wordCount++
    }
    
}

console.log(wordCount)
