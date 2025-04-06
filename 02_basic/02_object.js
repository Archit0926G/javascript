const students = new Object();

students.name= "Archit"
students.fatherName = "Jigneshkumar"
students.pass= true
console.log(students)
console.log(Object.keys(students))   // it only keys from object in type of array
console.log(Object.values(students))  // it only velues from object in type of array
console.log(students.hasOwnProperty('name'))  // it chack given velue is in object or not

const visiter = {
    emailID :"hetd9727@gmail.com",
    mobileNum : 9898989898 ,
    fullName: {
        firstName : "het",
        lastName : "desai"
    }
}

console.log(visiter.fullName.firstName)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4={obj1,obj2,obj3}   // it is nested object
console.log(obj4)

const newObj = Object.assign(obj1,obj2,obj3)
console.log(newObj)

const newObj2 = {...obj1,...obj2,...obj3}   // sperde oprator
console.log(newObj2)

const insta = [
    {
        id: 1,
        name:"archit"
    },
    {
        id: 2,
        name:"het"
    },
    {
        id: 3,
        name:"ashok"
    },
    {
        id: 4,
        name:"adarsh"
    }
]

const instaName = insta[0].name
console.log(instaName)