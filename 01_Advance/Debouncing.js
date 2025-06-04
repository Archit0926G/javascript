let search = (que) => {
    console.log(`searching for ${que}`)
}

search('he')
search('hel')
search('hell')
search('hello ')
search('hello Archit')

function debounce(fn , delay){
    let timer

    return function(...args){
        clearTimeout(timer)
         timer = setTimeout(() => {
            fn(...args)
        } , delay)
    }
}

let searchWithDedounce = debounce(search ,1000)

searchWithDedounce('he')
searchWithDedounce('hel')
searchWithDedounce('hell')
searchWithDedounce('hello ')
searchWithDedounce('hello het desai')

