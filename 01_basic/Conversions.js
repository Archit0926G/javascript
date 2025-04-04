let scoreInstring = "544";
console.log(scoreInstring);

let score = Number(scoreInstring);
console.log(typeof score);
console.log(score);

// "544" -> 544
// null -> 0; undefined -> NaN;
// "544dcd" -> NaN
// true -> 1; false -> 0;

let pass = 1;
console.log(pass);
console.log(typeof pass);


let passInboolen = Boolean(pass);
console.log(passInboolen);
console.log(typeof passInboolen);

// 1 -> true; 0 -> false;
// null -> false
// undefine -> false
// "" -> false
// "archit" -> true


let value = 25;
let negValue = -value;
console.log(negValue);


console.log("1" + 2)  // ans =12
console.log(1 + "2")  // ans =12
console.log("1" + 2 + 2)  // ans =122
console.log(1 + 2 + "2")  // ans =32
console.log("1" - 2)    // ans =-1
console.log("1" * 2)  // ans =2
console.log(+true)   // ans =1
console.log(+"")     // ans =0