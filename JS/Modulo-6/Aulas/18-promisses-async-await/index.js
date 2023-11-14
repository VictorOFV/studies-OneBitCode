function awaitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000);
    })
}

const numbers = [10, 22, 30, 50, 70]

async function execute() {
    const square = await Promise.all(numbers.map(async number => {
        await awaitFor(2)
        return number * number
    }))

    console.log(square)
}

execute()

//Já vimos que podemos utilizar funções async dentro do Promise.all(), afinal elas retornam uma
//promise. Porém, como o próprio Promise.all() retorna uma promise também podemos utilizar o 
//await com ele. No código abaixo vemos que a função .map() está retornando um array de
//promises pendentes:
//Obs.: a função waitFor() é apenas uma forma simples de fazer o código esperar por uma 
//quantidade arbitrária de tempo, assim simulamos um código que demora a ser executado.

//Poderíamos usar o Promise.all() para esperar pelos resultados e exibi-los através do .then():
//Mas se estivermos trabalhando com uma função async podemos usar o await no próprio Promise.all():