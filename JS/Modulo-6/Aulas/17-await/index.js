async function sum(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        return Promise.reject(new Error("Os argumentos devem ser um número"))
    }

    return a + b
}

async function execute(a, b) { // o await espera a promisse ser resolvida para poder continuar exutar o resto do codigo
    try {
        const result = await sum(a, b)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

execute(10, 10)