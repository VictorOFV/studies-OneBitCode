function execute(value){
    return new Promise((resolve, reject) => {
        console.log("Executando a promisse")
        if(value !== 5){
            reject("Valor diferente de 5")
        }else{
            console.log("Resolvendo a promisse")
            setTimeout(() => {
                resolve(`O dobro de ${value} é ${value * 2}`)
            }, 1000 * 2);
        }
    })
}

execute(7).then((result) => { // faz alguma coisa com o resultado da promisse
    console.log(`Resultado da promisse: ${result}`)
}).catch((error) => { // faz alguma coisa caso de algum erro na promisse
    console.log(`Houve um erro na promisse! Erro: ${error}`)
}).finally(() => { // sempre faz alguma coisa mesmo dando erro ou nao
    console.log("Finalizando promisse")
})

console.log("Ola Mundo")
console.log("Ola Mundo")
console.log("Ola Mundo")
console.log("Ola Mundo")