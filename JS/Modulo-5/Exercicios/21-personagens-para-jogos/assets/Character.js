class Character {
    constructor(name, baseAttack, defense) {
        this.name = name
        this.baseAttack = baseAttack
        this.defense = defense
        this.life = 100
    }

    attack(character) {
        if (character instanceof Character) {
            const baseDamage = this.baseAttack - character.defense
            character.life -= baseDamage

            return `O personagem "${this.name}" infligiu ${baseDamage} de dano a "${character.name}"\nVida Atual de "${character.name}" é de ${character.life}HP`
        }
    }
}

module.exports = Character