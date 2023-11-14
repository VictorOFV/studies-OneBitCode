function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject(new Error("Isso não é um número de soma"))
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject(new Error("Isso não é um número de subtração"))
        } else {
            resolve(a - b)
        }
    })
}

const resultSum = asyncSum(12, 10)
const resultSubtract = asyncSubtract(20, 15)

Promise.all([resultSum, resultSubtract]).then((results) => { // usamos o promisse.all para executar varias promisses, e se alguma der erro ela para
    console.log(results)
}).catch((e) => {
    console.log(e.message)
})

const numberArr = [22, 5, 10, "Ola mundo", 30, 12, 25]

function squareNumber(value) {
    return new Promise((resolve, reject) => {
        if (typeof value !== "number") {
            reject(new Error(`${value} não é um numero`))
        } else {
            resolve(value * value)
        }
    })
}

Promise.all(numberArr.map(number => squareNumber(number))).then((results) => {
    console.log(results) // usamos o metodo map, para mapear o array e excutar cada elemento do array em promisses diferente
}).catch((e) => { // fazendo isso o promisse all pode ser executado normalmente
    console.log(e.message)
})