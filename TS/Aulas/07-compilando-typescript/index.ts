let starship = {
    name: "Falcon 9",
    speed: 0,
    pilot: "",
    inMission: false
}

function mission(starship: { name: string, speed: number, pilot: string, inMission: boolean}): void {
    starship.inMission = starship.inMission === true ? false : true
}

function addPilot(starship: { name: string, speed: number, pilot: string, inMission: boolean}, newPilot: string): void {
    starship.pilot = newPilot
}

function acellerate(starship: { name: string, speed: number, pilot: string, inMission: boolean}, newSpeed: number): void {
    starship.speed += newSpeed
}

const pilot = "Victor Manoel"

mission(starship)
addPilot(starship, pilot)
acellerate(starship, 550)
console.log(starship)