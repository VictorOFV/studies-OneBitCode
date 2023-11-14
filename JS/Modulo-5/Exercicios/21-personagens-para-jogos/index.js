const Character = require("./assets/Character")
const Thief = require("./assets/Thief")
const Mage = require("./assets/Mage")
const Warrior = require("./assets/Warrior")

const arthur = new Mage('Arthur', 20, 10, 5)
const beatrice = new Thief('Beatrice', 25, 15)
const cain = new Warrior('Cain', 15, 10, 10)

console.table({ arthur, beatrice, cain })

arthur.attack(beatrice)
cain.attack(arthur)

console.table({ arthur, beatrice, cain })

arthur.attack(cain)
beatrice.attack(arthur)

console.table({ arthur, beatrice, cain })

arthur.heal(arthur)
cain.attack(beatrice)

console.table({ arthur, beatrice, cain })

