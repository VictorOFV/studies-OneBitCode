function addMember(starshipName, memberName, database) {
    const starship = database.find(({ name }) => (starshipName === null || starshipName === void 0 ? void 0 : starshipName.toLocaleLowerCase()) === (name === null || name === void 0 ? void 0 : name.toLocaleLowerCase()));
    if (starship) {
        if (starship.crew.length >= starship.crewLimit) {
            alert(`Número máximo de tripulantes atingido! ${memberName} não pode se juntar à equipe.`);
        }
        else {
            starship.crew.push(memberName);
            alert(`${memberName} agora faz parte da nossa tripulação.\nTripulação a bordo: [${starship.crew.length} / ${starship.crewLimit}]`);
        }
    }
    else {
        alert("Esta espaçonave não existe!");
    }
}
export default addMember;
