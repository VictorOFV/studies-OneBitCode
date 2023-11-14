const form = document.getElementById("formCharacter")

function styleCSS() {
    document.getElementById("text-result").innerHTML = "Resultado:"
    document.getElementById("text-result").style.fontFamily = "Trebuchet MS"
    document.getElementById("text-result").style.marginBottom = "0px"
    document.getElementById("result").style.backgroundColor = "white"
    document.getElementById("result").style.border = "2px black solid"
    document.getElementById("result").style.marginTop = "0px"
    document.getElementById("result").style.fontFamily = "Times New Roman"
    document.getElementById("result").style.paddingLeft = "5px"
    document.getElementById("result").style.paddingBottom = "3px"
    document.getElementById("result").style.paddingTop = "3px"
}

form.addEventListener('submit', function(e) {

try{

    const data = new FormData(form)
    //Player1
    const characte1 = data.get('characte1Name')
    const attackPower = parseFloat(data.get('attackPower'))
    //Player2
    const characte2 = data.get('characte2Name')
    const defensePower = parseFloat(data.get('defensePower'))
    const hasShield = (data.get('hasShield') === 'true');
    let life = parseFloat(data.get('life'))
    
    if(attackPower > defensePower && hasShield === false){

        let damage = attackPower - defensePower
        let shield = hasShield ? "Sim":"Não"

        life -= damage

        if(life < 0){life = 0}
        
        let result = (`O(a) Personagem ${characte1} deu ${damage} de ataque no(a) personagem ${characte2}.<br><br>${characte1}:<br>Poder de Ataque: ${attackPower}<br><br>${characte2}:<br>Poder de Defesa: ${defensePower}<br>Vida: ${life}<br>Escudo: ${shield}`)
        document.getElementById("result").innerHTML = result
        styleCSS()

    }else if(attackPower > defensePower && hasShield === true){
        
        let damageShield = attackPower - defensePower
        let damage = damageShield / 2
        let shield = hasShield ? "Sim":"Não"
        
        life -= damage

        if(life < 0){life = 0}

        let result = (`O(a) Personagem ${characte1} deu ${damageShield} de ataque no(a) personagem ${characte2}, porem o(a) ${characte2} tinha escudo e o dano foi reduzido para ${damage}.<br><br>${characte1}:<br>Poder de Ataque: ${attackPower}<br><br>${characte2}:<br>Poder de Defesa: ${defensePower}<br>Vida: ${life}<br>Escudo: ${shield}`)
        document.getElementById("result").innerHTML = result
        styleCSS()

    }else if(attackPower < defensePower){

        let damage = attackPower - defensePower
        let shield = hasShield ? "Sim":"Não"

        if(damage < 0){damage = 0}

        life -= damage

        let result = (`O(a) Personagem ${characte1} deu ${damage} de ataque no(a) personagem ${characte2}, pois o poder de ataque era inferior ao poder de defesa.<br><br>${characte1}:<br>Poder de Ataque: ${attackPower}<br><br>${characte2}:<br>Poder de Defesa: ${defensePower}<br>Vida: ${life}<br>Escudo: ${shield}`)
        document.getElementById("result").innerHTML = result
        styleCSS()
        
    }else{
        let damage = attackPower - defensePower
        let shield = hasShield ? "Sim":"Não"

        life -= damage

        let result = (`O(a) Personagem ${characte1} deu ${damage} de ataque no(a) personagem ${characte2}, pois o poder de ataque e o poder de defesa de ambos personagens eram iguais.<br><br>${characte1}:<br>Poder de Ataque: ${attackPower}<br><br>${characte2}:<br>Poder de Defesa: ${defensePower}<br>Vida: ${life}<br>Escudo: ${shield}`)
        document.getElementById("result").innerHTML = result
        styleCSS()
    }

}catch(e){console.error(e)}
    e.preventDefault()
})

