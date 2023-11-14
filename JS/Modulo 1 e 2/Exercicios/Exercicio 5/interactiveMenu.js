let interactiveMenu = null

do {     
        interactiveMenu = parseFloat(prompt(
        "Escolha 1 das Opções abaixo:\n\n"+
        "1. Falar com o Suporte\n"+
        "2. Comprar um pacote de dados\n"+
        "3. Cancelar um Plano\n"+
        "4. Renovar um Plano\n" +
        "5. Encerrar Programa"
    ))
    
    switch(interactiveMenu){
        case 1:
            alert("Você escolheu a opção 1. Falar com o Suporte.")
            break;
        case 2:
            alert("Você escolheu a opção 2. Comprar um pacote de dados")
            break;
        case 3:
            alert("Você escolheu a opção 3. Cancelar um Plano")
            break;
        case 4:
            alert("Você escolheu a opção 4. Renovar um Plano")
            break;
        case 5:
            alert("Você escolheu a opção 5. Encerrar o Programa")
            break
        default:
            alert("Eu nao consegui identificar a opção desejada!")
    }

} while(interactiveMenu != 5);

alert("Encerrando o Programa...")