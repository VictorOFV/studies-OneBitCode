const Character = require("./Character");

class Warrior extends Character {
    constructor(name, baseAttack, defense, shield) {
        super(name, baseAttack, defense)
        this.shield = shield
        this.position = "attack"
    }

    attack(character) {
        if (character instanceof Character) {
            if (this.position === "attack") {
                this.positionSwitch()
                const baseDamage = this.baseAttack - character.defense
                character.life -= baseDamage

                return `O personagem "${this.name}" infligiu ${baseDamage} de dano a "${character.name}"\nVida Atual de "${character.name}" é de ${character.life}HP`
            } else {
                this.positionSwitch()
                return `O personagem "${this.name}" estava em posição de defesa, e por isso não deu nenhum dano.`
            }
        }
    }

    positionSwitch() {
        this.position = this.position === "attack" ? "defense" : "attack"
        this.defense = this.position === "attack" ? this.defense -= this.shield : this.defense += this.shield
    }
}

module.exports = Warrior