var starship = {
    name: "Falcon 9",
    speed: 0,
    pilot: "",
    inMission: false
};
function mission(starship) {
    starship.inMission = starship.inMission === true ? false : true;
}
function addPilot(starship, newPilot) {
    starship.pilot = newPilot;
}
function acellerate(starship, newSpeed) {
    starship.speed += newSpeed;
}
var pilot = "Victor Manoel";
mission(starship);
addPilot(starship, pilot);
acellerate(starship, 550);
console.log(starship);