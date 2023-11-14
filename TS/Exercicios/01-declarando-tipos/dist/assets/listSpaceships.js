function listSpaceships(database) {
    database.forEach(({ name, pilot, crewLimit, crew, inMission }) => {
        alert(`Nome da Espaçonave: ${name}\nPiloto: ${pilot}\nLimite de Tripulantes: ${crewLimit}\n Em Missão: ${inMission === true ? "Sim" : "Não"}\nTripulantes: ${crew.join(", ")}`);
    });
}
export default listSpaceships;
