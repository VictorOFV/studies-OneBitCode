import { br, label, input } from "./functions.js"

console.log(label({htmlFor: "name", innerText: "Nome:"}))
console.log(input({id: "name", type: "text"}))
console.log(br())

//Importando e exporando com ES Module, os nomes das variaveis ou funções tem que ser identica ao chamada