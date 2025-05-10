// problem statement :- Sort an Array Without Using Built-in Sort Functions

let arr = [3,2,1]
let temp

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j +1 ]) {
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }    
}

console.log(`shorted arr is ${arr}`)