let option = null
let properties = []

do {
 
    option = parseFloat(prompt(
        "Olá! seja bem vindo(a) ao Menu de Imóveis\n\n" +
        "Imóveis Cadastrados: " + properties.length +
        "\n\n1. Novo Imóvel"+
        "\n2. Listar Imóveis"+
        "\n3. Sair"
    ))

    switch(option){
        case 1:
            let information = {
                proprietary: prompt("Digite o nome do dono do imóvel"),
                bedrooms: parseFloat(prompt("Digite a quantidade de quartos no imóvel")),
                bathrooms: parseFloat(prompt("Digite a quantidade de banheiros no imóvel")),
                hasGarage: prompt("O imóvel possui garagem? (Sim/Não)")
            }

            let confirm = window.confirm(
                "Você deseja realmente cadastrar o imóvel?\n" +
                "\n Proprietário: " + information.proprietary +
                "\n Quartos no Imóvel: " + information.bedrooms +
                "\n Banheiros no Imóvel: " + information.bathrooms +
                "\n Possui Garagem: " + information.hasGarage + "\n\n"  
            )

            if(confirm){
                properties.push(information)
                alert("Imóvel cadastrado com sucesso!")
            }else{
                alert("Retornando ao Menu")
            }
            break;
        case 2:
            for(let i = 0; i < properties.length; i++){
                alert(
                    "Imóvel " + (i + 1) +
                    "\n Proprietário: " + properties[i].proprietary +
                    "\n Quartos no Imóvel: " + properties[i].bedrooms +
                    "\n Banheiros no Imóvel: " + properties[i].bathrooms +
                    "\n Possui Garagem: " + properties[i].hasGarage + "\n\n"  
                )
            }
            break;
        case 3:
            alert("O programa está encerrando...")
            break;
        default:
            alert("Não consegui identificar a opção desejada!")
    }
    
} while (option !== 3);