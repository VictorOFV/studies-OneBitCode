const Character = require("./Character")

class Thief extends Character {
    attack(character) {
        if (character instanceof Character) {
            const baseDamage = (this.baseAttack * 2) - character.defense
            character.life -= baseDamage

            return `O personagem ${this.name}, originalmente, causava ${baseDamage / 2} de dano a ${character.name}, mas, por ser da classe Thief, infligiu ${baseDamage} de dano.\nVida Atual de ${character.name} é de ${character.life}HP`
        }
    }
}

module.exports = Thief