async function sum(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        return Promise.reject(new Error("O valor para a soma precisar ser do tipo numero"))
    }

    return a + b
}

async function subtract(a, b) { // funções com async continua sendo executadas como promisses so de maneira mais facil
    if(typeof a !== "number" || typeof b !== "number") {
        return Promise.reject(new Error("O valor para a subtração precisar ser do tipo numero"))
    }
    return a - b
}

const sumResult = sum(15, 20)
const subResult = subtract(20, 5)

Promise.all([sumResult, subResult]).then((results) => {
    console.log(results)
}).catch(e => console.log(e.message))

async function square(value) {
    if(typeof value !== "number") {
        return Promise.reject(new Error("O valor precisar ser do tipo numero"))
    }
    return value * value
}

const numbers = [22, 10, 5, false, 30, 50]

Promise.all(numbers.map(values => square(values))).then((results) => {
    console.log(results)
}).catch(e => console.log(e.message))