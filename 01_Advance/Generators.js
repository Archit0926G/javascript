function* numberGenerator() {
    yield 1
    yield 2
    yield 3
}
const gen = numberGenerator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

function* countUpto(limit) {
    for (let i = 1; i <= limit; i++) {
        yield i
    }
}

const counter = countUpto(9)

console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)

