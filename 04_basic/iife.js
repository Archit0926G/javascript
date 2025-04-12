// Immediately Invoked Function Expression (iife)


// it is named IIFE
(function one(){
    console.log("one")
})(); // here we must put ";" to end execution of funcation

((num1,num2) => {
    console.log(`sum is ${num1+num2}`)
})(10,20)