let a = 0

let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({ a, b })

let c = false ?? 42

console.log({ c })

//O operador de coalescência nula (??) é um operador lógico que retorna 
//o seu operando do lado direito quando 
//o seu operador do lado esquerdo é null ou undefined. 
//Caso contrário, ele retorna o seu operando do lado esquerdo.