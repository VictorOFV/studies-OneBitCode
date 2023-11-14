const starship = {
    name: "Falcon 9",
    speed: 0
}

function acelerateStarship({ speed }: { speed: number }, newSpeed: number): void {
    speed += newSpeed
}

acelerateStarship(starship, 150)