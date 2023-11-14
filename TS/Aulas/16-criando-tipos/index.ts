let value: "Yes" | "No" // atribui um valor fixo a uma variavel podendo ser somente o que foi atribuido na tipagem
value = "Yes" // so consegue receber Yes ou No, qualquer outra string da erro

type Planet = "Terra" | "Mercurio" | "Marte" | "Neturno" | "Jupter" | "Saturno"// Cria uma  tipagem mais complexa de acordo com dev

function planetIsTrue(planet: Planet) { // e nescessario um paramentro com a tipagem Planet criada a cima
    if(planet === "Terra") { // ele ja auto completa puxando todas as opções disponiveis
        console.log("Verdadeiro")
    } else {
        console.log("Falso")
    }
}

planetIsTrue("Mercurio") // ele também ja auto completa

interface user { // onde eu achei mais util, da criar uma tipagem com varios valores, e ai voce seta a propriedade com aquela tipagem criada
    name: string,
    age: number,
    planet: Planet
}

let user:user = {
    name: "Joao",
    age: 22,
    planet: "Neturno" // ele autocompleta listando todos os valores disponivel para essa propriedade
}