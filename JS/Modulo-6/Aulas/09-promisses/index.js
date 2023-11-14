function execute(value) {
    return new Promise((resolve, reject) => {
        console.log("A promisse está sendo executada!")
        if (value !== 5) {
            reject("O valor informado é diferente de 5")
        }

        setTimeout(() => {
            console.log("Resolvendo a promisse!")
            resolve(`Promisse resolvida, o dobro de ${value} é ${value * 2}`)
        }, 1000 * 2)
    })
}

const p = execute(5)

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 3)

console.log("Ola Mundo")