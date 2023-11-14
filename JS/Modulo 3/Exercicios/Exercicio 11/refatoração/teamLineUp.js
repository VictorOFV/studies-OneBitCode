function climbPlayer(){
    const name = document.getElementById("player-name")
    const position = document.getElementById("player-position")
    const number = document.getElementById("player-number")

    const confirmation = confirm(`Adicionar ${name.value} como ${position.value}?`)

    if(confirmation){
        const ol = document.getElementById("listPlayers")
        const li = document.createElement("li")
        li.innerText = `Nome do jogador: ${name.value} | Posição: ${position.value} | Camisa: [ ${number.value} ]`
        li.id = `player-${number.value}`
        ol.appendChild(li)

        name.value = ""
        position.value = ""
        number.value = ""
    }
}

function removePlayer(){
    const number = document.getElementById("remove-player")
    const removePlayerList = document.getElementById(`player-${number.value}`)

    const confirmation = confirm(`Remover ${removePlayerList.innerText}?`)

    if(confirmation){
        removePlayerList.remove()
        number.value = ""
    }
}