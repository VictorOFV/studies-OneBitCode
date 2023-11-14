function newSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    alert(`A espaçonave ${spaceship.name}, comandada por ${spaceship.pilot} foi criada com sucesso.`);
    return spaceship;
}
export default newSpaceship;
