console.log('hello one')

setTimeout(function(){
    console.log('hello two')
} , 2000)

console.log('hello three')

let promises = new Promise(function(reslove , reject) {
    setTimeout(function(){
        console.log('hello four')
    } , 5000)
})

let p1 = new Promise(function(reslove , reject){
    setTimeout(function(){
        reslove(true)
    } , 6000)
})

p1.then((value) => {
    console.log(value)
})

let p2 = new Promise(function(reslove , reject){
    setTimeout(function(){
        reject(new Error ("i am an error"))
    } , 7000)
})

p2.catch((error) => {
    console.log('hello error')
})