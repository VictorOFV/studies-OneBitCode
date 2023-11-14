// caso 1 do operador spread

const names = ["Jorge", "Luis", "Lucas", "Danilo", "Kamilla", "Victor", "Larissa"]

console.log(names) //Array Normal
console.log(...names) //Separa cada elemento do array
console.log(...names[0]) //Separa em espaços o elemento do array

// Caso 2 do operador spread

const nameClone = [...names] // clona o array fazendo que alteraçoes feitas em nameClone nao afete o array original, e como se fosse um slice!
nameClone.pop()
console.log(nameClone)


// Caso 3 do operador spread

const namesObj = {...names} // transforma o array names em objeto

const obj = {...namesObj} // copia o objeto criado da mesma forma que os array, depois adiciona uma chave chamada test sem alterar o objeto original
obj.test = 'Prima do Max'

console.log(namesObj, obj)

//alem de copiar o operador spread tambem pode passar varios paramentros de uma vez

function some (a, b, c){
    return a + b + c
}

const numbers = [1, 2, 3]

console.log(some(...numbers))