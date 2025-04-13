// for loop

for (let i = 1; i < 6; i++) {
    console.log(i)
    if (i == 3) {
        console.log("3 is best number")
    }
}

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`inner loop num ${j} outer loop ${i}`)
    }   
}

for (let i = 0; i < 6; i++) {
    console.log(`table of ${i}`)
   for (let j = 0; j < 11; j++) {
            console.log(i + `*` + j + `=` + i*j )
   }
}

const myFri = ['ashok' , 'het' , 'raj' ]
console.log('my friends :-')

for (let index = 0; index < myFri.length; index++) {
    const element = myFri[index];
    console.log(element)
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log(`we got 5`)
        break                           // here break jump loop and goo outside
    }
    console.log(`number is ${i}`)   
}

for (let i = 5; i < 11; i++) {
    if (i == 6) {
        console.log(`we got 6`)
        continue                        // here continue jump taht statement and continue the loop
    }
    console.log(`number is ${i}`)   
}