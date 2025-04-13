// for each is prototypr and it return callback funcation

const language =["gujrati","hindi","english"]

language.forEach(function(arr,index,language){
    console.log(arr,index,language)
})

let info = [
    {
        subname : "gujrati",
        marks : 55
    },
    {
        subname : "hindi",
        marks : 78
    },
    {
        subname : "english",
        marks : 22
    }
]

info.forEach((item) => {
    console.log(`subject ${item.subname} and you get ${item.marks} marks`)
})

const myarr = [1,2,3,4,5,6,7,8,9,10]

let evenNum = []

myarr.forEach((num) => {
    if (num%2==0) {
        console.log(`even number is :- ${num}`)
    }
})