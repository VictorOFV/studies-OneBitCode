import { Spaceship } from "./assets/newSpaceship";
import newSpaceship from "./assets/newSpaceship";
import addMember from "./assets/addMember";
import sendMissionSpaceship from "./assets/sendMissionSpaceship";
import listSpaceships from "./assets/listSpaceships";

let menu: number
let database: Spaceship[] = []

do {
    menu = Number(prompt("1. Criar Espaçonave\n2. Adicionar novo membro\n3. Enviar uma espaçonave em missão\n4. Listar naves\n5. Sair"))

    switch(menu) {
        case 1: {
            const name = prompt("Digite o nome da espaçonave")
            const pilot = prompt("Digite o nome do piloto")
            const crewLimit = Number(prompt("Digite o número maximo de tripulantes"))
            const spaceship = newSpaceship(name, pilot, crewLimit)
            database.push(spaceship)
            break;
        }
        case 2: {
            const name = prompt("Digite o nome da espaçonave")
            const memberName = prompt("Digite o nome do tripulante")
            addMember(name, memberName, database)
            break;
        }
        case 3: {
            const name = prompt("Digite o nome da espaçonave")
            sendMissionSpaceship(name, database)
            break;
        }
        case 4: listSpaceships(database)
            break;
        case 5: alert("Saindo da Aplicação")
            break;
        default: alert("Opção não encontrada!")
    }

} while (menu !== 5);