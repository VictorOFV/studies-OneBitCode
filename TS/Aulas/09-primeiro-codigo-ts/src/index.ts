function sendSpaceship(name: string | null, captain: string | null) {
    const spaceship = {
        name,
        captain,
        speed: 0,
        isMission: true
    }

    alert(`A nave ${spaceship.name}, acabou de ser lançada para missão comandada por ${spaceship.captain}!`)
    return spaceship
}

function speedUp(spaceship: { name: string | null, speed: number }, newSpeed: number) {
    if (spaceship.speed < newSpeed) {
        alert(`Aumentando a velocidade da nave ${spaceship.name} para ${speed}`)
        spaceship.speed = newSpeed
    } else if (spaceship.speed > newSpeed) {
        alert(`Diminuindo a velocidade da nave ${spaceship.name} para ${speed}`)
        spaceship.speed = newSpeed
    } else {
        alert(`Mantendo a velocidade de ${spaceship.speed}`)
        spaceship.speed = newSpeed
    }
}

const nameSpaceship = prompt("Digite o nome da espaço nave")
const captain = prompt("Digite o nome do capitão")
const spaceship = sendSpaceship(nameSpaceship, captain)
const speed = Number(prompt("Digite a velocidade"))

speedUp(spaceship, speed)