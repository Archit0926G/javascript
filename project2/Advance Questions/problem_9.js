//problem statement :- Pattern 

let star = ""

for (let i = 1; i <= 4; i++) {

    for (let j = 1; j <= i; j++) {
        
        process.stdout.write(`*`)        

    }

    process.stdout.write(`\n`) 
}
