//problem statement :- Reverse a String Without Using Built-in Functions

let name = "Archit"
let reversed = ""

for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i]
}

console.log(reversed)