let option = null
let cards = []

do {
    option = parseFloat(prompt(
        "1. Adicionar Carta\n"+
        "2. Puxar Carta\n"+
        "3. Sair\n\n"+
        "Número de Cartas: " + cards.length
    ))

    switch(option){
        case 1:
            cards.unshift(prompt("Digite o Nome da Carta"))
            break;
        case 2:
            let pushCard = cards.shift()
            if(pushCard){
                alert("Você puxou a carta "+ pushCard)
            }else{
                alert("Não há nenhuma carta no baralho")
            }
            break;
        case 3:
            alert("Você está saindo do programa...")
            break;
        default:
            alert("Não consegui identificar a opção desejada!")
    }
    
} while (option != 3);