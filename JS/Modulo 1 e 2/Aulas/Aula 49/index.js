// Funções anonimas, 
function somar(a, b){
    return a + b
}

let calculo = somar
console.log(calculo(20, 10))

function subtrair(a, b){
    return a - b
}

calculo = subtrair

console.log(calculo(20, 10))

let dividir = function(a, b){
    return a / b
}

console.log(dividir(20, 10))


/*Em JavaScript, funções anônimas são funções que não possuem um nome associado. Elas são definidas sem um identificador após 
a palavra-chave function. As funções anônimas podem ser usadas em várias situações para criar blocos de código reutilizáveis 
e flexíveis*/
