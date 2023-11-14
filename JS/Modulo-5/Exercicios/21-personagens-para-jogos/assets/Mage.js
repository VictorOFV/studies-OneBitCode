const Character = require("./Character")

class Mage extends Character {
    constructor(name, baseAttack, defense, magic) {
        super(name, baseAttack, defense)
        this.magic = magic
    }

    attack(character) {
        if (character instanceof Character) {
            const baseDamage = this.baseAttack - character.defense
            const totalDamage = (this.baseAttack + this.magic) - character.defense
            character.life -= totalDamage

            return `O personagem "${this.name}", originalmente, causava ${baseDamage} de dano a "${character.name}", mas, por ser da classe mago, infligiu ${totalDamage} de dano.\nVida Atual de "${character.name}" é de ${character.life}HP`
        }
    }

    heal(character) {
        if (character instanceof Character) {
            const oldLife = character.life
            character.life += (this.magic * 2)

            return `"${this.name}" aplicou uma cura de ${this.magic * 2}HP em "${character.name}"!\nA vida de "${character.name}" subiu de ${oldLife}HP para ${character.life}HP.`
        }
    }
}

module.exports = Mage