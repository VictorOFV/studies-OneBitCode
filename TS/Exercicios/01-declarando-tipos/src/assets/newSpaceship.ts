export interface Spaceship {
    name: string | null,
    pilot: string | null,
    crewLimit: number,
    crew: string[],
    inMission: boolean
}

function newSpaceship(name: string | null, pilot: string | null, crewLimit: number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    alert(`A espaçonave ${spaceship.name}, comandada por ${spaceship.pilot} foi criada com sucesso.`)
    return spaceship
}

export default newSpaceship