import { Spaceship } from "./newSpaceship";

function addMember(starshipName: string | null, memberName: string | null, database: Array<Spaceship>) {
    const starship = database.find(({ name }) => starshipName?.toLocaleLowerCase() === name?.toLocaleLowerCase())

    if(starship) {
        if(starship.crew.length >= starship.crewLimit) {
            alert(`Número máximo de tripulantes atingido! ${memberName} não pode se juntar à equipe.`)
        } else {
            starship.crew.push(String(memberName))
            alert(`${memberName} agora faz parte da nossa tripulação.\nTripulação a bordo: [${starship.crew.length} / ${starship.crewLimit}]`)
        }
    } else {
        alert("Esta espaçonave não existe!")
    }
}

export default addMember