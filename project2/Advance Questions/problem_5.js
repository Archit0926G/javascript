//problem statement :- Write a program to shift all zeroes to the end of an array while maintaining the order of non-zero elements.

let arr = [0,1,2,0,4,5]
let result = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        result.push(arr[i])
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        result.push(arr[i])
    }
}

console.log(result)