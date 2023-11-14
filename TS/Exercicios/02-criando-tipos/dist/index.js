"use strict";
let database = [];
function createPlanet(name, coordinates, situation) {
    const planet = {
        name,
        coordinates,
        situation,
        satellites: []
    };
    database.push(planet);
}
function showDatabase() {
    console.log(database);
}
function updatePlanet(name, situation) {
    const planet = findPlanet(name);
    if (!planet) {
        alert("Planeta não encontrado!");
    }
    else {
        alert(`A situação do planeta ${planet.name} foi atualizada com sucesso de '${planet.situation}' para '${situation}`);
        planet.situation = situation;
    }
}
function addSatellite(name, satellite) {
    const planet = findPlanet(name);
    if (!planet) {
        alert("Planeta não encontrado");
    }
    else {
        planet.satellites.push(satellite);
        alert(`O satélite ${satellite} foi adicionado ao planeta ${planet.name} com sucesso!\n\nSatélites existentes:\n${planet.satellites.join("\n- ")}`);
    }
}
function removeSatellite(name, nameSatellite) {
    const satellite = findSatellite(name, nameSatellite);
    const planet = findPlanet(name);
    if (!planet) {
        alert("Planeta não encontrado");
    }
    else if (satellite === -1 || satellite === undefined) {
        alert("Satélite não encontrado!");
    }
    else {
        planet.satellites.splice(satellite, 1);
        alert(`O satélite ${nameSatellite} foi excluido`);
    }
}
function listPlanets() {
    database.forEach(({ name, coordinates, situation, satellites }) => {
        alert(`Nome: ${name}\nCordenadas: ${coordinates.join(" ")}\nSituação: ${situation}\nSatélites: ${satellites.join(", ")}`);
    });
}
function findPlanet(namePlanet) {
    const data = database.find(({ name }) => (name === null || name === void 0 ? void 0 : name.toLocaleLowerCase()) === namePlanet.toLocaleLowerCase());
    return data;
}
function findSatellite(namePlanet, nameSatellite) {
    const planet = findPlanet(namePlanet);
    const satellite = planet === null || planet === void 0 ? void 0 : planet.satellites.indexOf(nameSatellite);
    return satellite;
}
function switchSituation(option) {
    switch (option) {
        case 1:
            return "Habitado";
        case 2:
            return "Habitável";
        case 3:
            return "Inabitável";
        case 4:
            return "Inexplorado";
    }
}
function firstOption() {
    const name = prompt("Digite o nome do planeta");
    const coordinatesString = prompt("Digite as coordenadas com espaços, ex: 445 225 100 758");
    const coordinates = coordinatesString ? coordinatesString.split(" ").slice(0, 4).map(Number) : undefined;
    const situation = Number(prompt("1. Habitado\n2. Habitável\n3. Inabitável\n4. Inexplorado"));
    const optionSituation = switchSituation(situation);
    if (name && coordinates && optionSituation) {
        createPlanet(name, coordinates, optionSituation);
    }
}
function secondFunction() {
    const name = prompt("Digite o nome do planeta");
    const situation = Number(prompt("1. Habitado\n2. Habitável\n3. Inabitável\n4. Inexplorado"));
    const optionSituation = switchSituation(situation);
    if (name && optionSituation) {
        updatePlanet(name, optionSituation);
    }
}
function thirdFunction() {
    const planetName = prompt("Digite o nome do planeta");
    const satelliteName = prompt("Digite o nome do satélite");
    if (planetName && satelliteName) {
        addSatellite(planetName, satelliteName);
    }
}
function fourthFunction() {
    const planetName = prompt("Digite o nome do planeta");
    const satelliteName = prompt("Digite o nome do satélite");
    if (planetName && satelliteName) {
        removeSatellite(planetName, satelliteName);
    }
}
function menu() {
    let option;
    do {
        option = Number(prompt("1. Criar Planeta\n2. Atualizar Situação\n3. Adicionar Satélite\n4. Remover Satélite\n5. Listar Planetas\n6. Sair"));
        switch (option) {
            case 1:
                firstOption();
                break;
            case 2:
                secondFunction();
                break;
            case 3:
                thirdFunction();
                break;
            case 4:
                fourthFunction();
                break;
            case 5:
                listPlanets();
                break;
            case 6:
                alert("Saindo do programa...");
                break;
        }
    } while (option !== 6);
}
document.addEventListener("DOMContentLoaded", menu);
