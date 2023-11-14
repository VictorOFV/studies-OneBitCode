import { Spaceship } from "./newSpaceship";

function sendMissionSpaceship(spaceshipName: string | null, database: Array<Spaceship>) {
    const spaceship = database.find(({ name }) => spaceshipName?.toLocaleLowerCase() === name?.toLocaleLowerCase())

    if(spaceship) {
        if(spaceship.crew.length < parseInt(String(spaceship.crewLimit / 3))) {
            alert(`Você precisa de pelo menos ${parseInt(String(spaceship.crewLimit / 3))} tripulantes para poder iniciar uma missão`)
            return
        }

        if(spaceship.inMission) {
            alert(`A espaçonave ${spaceship.name} já está em missão!`)
        } else {
            spaceship.inMission = true
            alert(`A espaçonave ${spaceship.name} acabou de ser lançada em missão com [${spaceship.crew.length} / ${spaceship.crewLimit}] Tripulantes`)
        }
    }
}

export default sendMissionSpaceship