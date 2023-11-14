const name = prompt("Digite o seu nome")
let question = prompt("Você já visitou alguma cidade? (Sim/Nao)")
let numberOfCities = 0
let Cities = ""

while(question === "Sim"){

    let city = prompt("Qual é o nome da cidade?")
    question = prompt("Você já visitou alguma outra cidade? (Sim/Nao)")
    numberOfCities++
    Cities += ' - '+ city
}

alert(
    'Nome: ' + name +
    '\nQuantidade de Cidades Visitadas: ' + numberOfCities+
    '\nCidades: ' + Cities
)