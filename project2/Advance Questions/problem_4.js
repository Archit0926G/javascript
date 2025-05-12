//problem statement :- Compare two arrays and find elements that appear in both, without using sets or built-in intersection methods.

let arr1 = [1,2,3,4,5]
let arr2 = [5,6,7,8,9,4]
let result = []

for (let i = 0; i < arr1.length; i++) {
    
    for (let j = 0; j < arr2.length; j++) {
        
        if (arr1[i] == arr2[j]) {
            result.push(arr1[i])
        }

    }
    
}

console.log(`comman element in both array is ${result}`)