async function getData () {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(455)
        } , 3500)
    })
}

async function main() {
    console.log('loading')

    console.log('do sometihng else')

    console.log('load data')

    let data = await getData()

    console.log(data)

    console.log('Processing')

    console.log('task 2')
}

main()

