function step02(){
    console.log("Passo 2")
}

console.log("Passo 1")|
step02()
console.log("Passo 3")
console.log("Passo 4")
console.log("Passo 5")
setTimeout(() => {
    console.log("Passo 6")
}, 1000 * 2);

console.log("Passo 7")

// basicamente a assincronicidade não trava o codigo para executar alguma função, calculo etc..
// ela excuta o codigo, faz todos os calculos porem ela ainda continua chamando o resto do codigo
// fazendo que ela chame enquanto resolve