//problem statement :- Find the Largest of Three Numbers

const a = 10
const b = 50
const c = 20

if (a > b && a > c) {
    console.log(`${a} is largest number`)
}
else if(a < b && b > c){
    console.log(`${b} is largest number`)
}
else{
    console.log(`${c} is largest number`)
}