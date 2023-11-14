//High order function e arrays

const characters = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// map: permite obter um novo array a partir de um array existenste

const nameAndRace = characters.map(function(character){
    return {nome: character.nome, raca: character.raca}
})

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente

const levelAndClasse = characters.filter(function(character){
    return character.nivel >= 30 && character.classe === "Guerreiro" || character.classe === "Paladino" || character.classe === "Xamã"
})

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final

const races = characters.reduce(function(newValue, character){
    if(newValue[character.raca]){
        newValue[character.raca].push(character)
    }else{
        newValue[character.raca] = [character]
    }
    return newValue
}, [])

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
// O primeiro código ele copia o array original utilizando o slice e organiza do menor para o maior

const charactersOrder = characters.slice().sort(function(a, b){
    return a.nivel - b.nivel
})

// O segundo código ele altera diretamente o array original e orgazina do maior para o menor

characters.sort(function(a, b){
    return b.nivel, a.nivel
})


console.log(levelAndClasse)
console.log(nameAndRace)
console.log(races)
console.log(charactersOrder)
console.log(characters)