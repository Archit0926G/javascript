let a = "Archit"  // it is goble veriable

if(true){
    let a = "het"  // it is local veriable 
    console.log(`hello ${a}`)
}

console.log(`hello ${a}`)


function one(user){
    let name  = "Archit" 

    function two(){
        console.log(`hello ${name}`)  // we can acces name from parents funcation
        age = 18
       
    }
    // console.log(age)  we can't acces age from child funcation
}

one()


function archit(name){
    console.log(`hello ${name}`)
}
archit("parth")


// het("parth2") here we can't declared it give error
const het = function(name){  // veriable hold funcation
    console.log(`hello ${name}`)
}

het("parth2")