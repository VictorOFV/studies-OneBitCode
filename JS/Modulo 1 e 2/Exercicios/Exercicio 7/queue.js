let option = null
let patients = []

do {

    let result = ""

    for(let i = 0; i < patients.length; i++){
        result += (i + 1) + "º " + patients[i] + "\n"
    }

    option = parseFloat(prompt(
        "1. Novo Paciente\n"+
        "2. Consultar Paciente\n"+
        "3. Sair\n\n"+
        "Pacientes na Fila de Espera:\n" + result
    ))

    switch(option){
        case 1:
            patients.push(prompt("Digite o Nome do Paciente!"))
            break;
        case 2:
            let consultPatient = patients.shift()
            if(consultPatient){
                alert("Você está consultado o paciente " + consultPatient)
            }else{
                alert("Não há nenhum paciente para consultar!")
            }
            break;
        case 3:
            alert("Você está saindo do programa...")
            break;
        default:
            alert("Não consegui identificar a opção desejada!")
    }

} while (option != 3);