const args = process.argv.slice(2)
const namedArgument = {}

args.forEach((arg, index, array) => {
    if (arg.startsWith("--")) {
        const argName = arg.slice(2)
        const argValue = array[index + 1]
        namedArgument[argName] = argValue
    }
})

console.log(namedArgument)

// Podemos usar argumentos de linha de comando para tornar nossos scripts mais dinâmicos. 
// Eles funcionam como argumentos de uma função, porém são informados no próprio comando de execução. 
// Para executar esse script usaremos o comando node script.js arg1 arg2 arg3: