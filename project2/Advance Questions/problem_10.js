//problem statement :- Determine whether a given array is sorted in ascending order, descending order, or unsorted

let arr = [5,3,4,2,1]
let ascending = true
let descending = true

for (let i = 0; i < arr.length-1; i++) {
    
    if (arr[i] > arr[i+1]) {
        ascending = false
    }
    else if (arr[i] < arr[i+1]) {
        descending = false
    }
    
}

if (ascending == true) {
    console.log(`${arr} is in ascending order`)
}
else if (descending == true) {
    console.log(`${arr} is in descending order`)
}
else{
    console.log(`${arr} is unsorted`)
}
