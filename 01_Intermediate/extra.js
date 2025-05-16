// Currying 

function add (a){
    return function(b){
        return function(c){
           return a + b + c 
        }
    }
}

console.log(add(2)(3)(5))

// when all parameter are present then and then funcation is exicuted

// Closures

function one(){
    let a = 'i am Closures for funcation "two"'
    function two(){
        console.log(a)
    }
    two()
}

one()

// hear a is Closures for funcation two

// Memoization

//this is normal funcation

let sum = 0

const calculate = (n) => {
    for (let i = 0; i < n; i++) {
        sum+=i        
    }
    return sum
}

console.time()
console.log(calculate(5))
console.timeEnd()


// this is memoization funcation

const memo = {}

const cal = (n) => {
    if (memo[n]) {
        return memo[n]
    }

    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += i
    }

    memo[n] = sum
    return sum
}

console.time()
console.log(cal(5)) // First time, cald
console.timeEnd()

console.time()
console.log(cal(5)) // Second time, from cache 
console.timeEnd()


