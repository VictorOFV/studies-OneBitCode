//caso 1 com arrow function
const arrowSum = (a, b) => a + b
console.log(arrowSum(4, 2))

// Caso 2 com arrow function
const arrowSum2 = (a, b) => {
   return a + b 
}
console.log(arrowSum2(8, 8))

// Caso 3 com arrow function

const arrowDoble = n => `O dobro de ${n} é igual a ${n * 2}`;
console.log(arrowDoble(2))

// Caso 4 com arrow function

const array = ["Guilherme", "Henrique", "Juliano", "Julio", "JorgeNildo", "Gurila"]
const resultOfArray = array.filter(name => name[0] === "J")
console.log(resultOfArray)