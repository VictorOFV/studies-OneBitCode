setTimeout(() => { // executa o bloco de codigo apos o tempo setado
    console.log("Ola, se passou 7 segundos!")
}, 1000 * 7)

let number = 0

const interval = setInterval(() => { // executa o bloco de codigo no tempo setado, sempre repetindo
    number += 2

    if (number > 20) { // encerrando o interval quando o number chegar a 20
        clearInterval(interval)
        console.log("Encerrando programa")
        return
    }

    console.log(`Se passaram ${number} segundos`)

}, 1000 * 2)