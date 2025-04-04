let firstName = "Archit"
let lastName = "Thakkar"

console.log(`hello ${firstName} ${lastName} welcome to them`);


const user = new String("Thakkar Archit")

console.log(user[0])
console.log(user.length)
console.log(user.toUpperCase())  //here toUpperCase()  & toLowerCase() are function
console.log(user.toLowerCase())
console.log(user.charAt(8))
console.log(user.indexOf('t'))
console.log(user.substring(0,7))
console.log(user.slice(-6,14))
console.log(user.split("-"))


let user1 = "      het       "
console.log(user1.trim())  // trim() remove spaces around string
console.log(user1.trimEnd())  // trimStart() and teimEnd() are also remove space according to use

let url = "https://chatgpt%20.com"   // here browser convert space into %20 in URL
console.log(url.replace('%20' , ''))
console.log(url.includes('chatgpt'));
