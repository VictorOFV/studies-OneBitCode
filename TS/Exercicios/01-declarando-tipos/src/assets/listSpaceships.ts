import { Spaceship } from "./newSpaceship";

function listSpaceships(database: Array<Spaceship>) {
    database.forEach(({ name, pilot, crewLimit, crew, inMission}) => {
        alert(`Nome da Espaçonave: ${name}\nPiloto: ${pilot}\nLimite de Tripulantes: ${crewLimit}\nEm Missão: ${inMission === true ? "Sim" : "Não"}\nTripulantes: ${crew.join(", ")}`)
    })
}

export default listSpaceships