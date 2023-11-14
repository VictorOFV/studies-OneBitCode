let money = parseFloat(prompt("Qual é a quantidade de dinheiro inicial?"))
let option = null

do {
        option = parseFloat(prompt(
        "Escolha uma operação abaixo:\n" +
        "\nSeu Dinheiro: R$" + money +
        "\n\n1. Adicionar uma quantia de dinheiro" +
        "\n2. Remover uma quantia de dinheiro" +
        "\n3. Sair"
    ))

    switch(option){

        case 1:
            let addValue = parseFloat(prompt("Digite a quantidade de dinheiro que deve ser Adicionado"))
            money += addValue
            break;
        case 2:
            let subtractValue = parseFloat(prompt("Digite a quantidade de dinheiro que deve ser Removido"))
            money -= subtractValue
            break;
        case 3:
            alert("Você está saindo do programa...")
            break;
        default:
            alert("Não consegui identificar a opção desejada, por favor tente novamente")
    }

} while(option != 3)