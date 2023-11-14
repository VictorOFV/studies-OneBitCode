function climbPlayer() {
    const playerName = document.getElementById("player-name")
    const playerPosition = document.getElementById("player-position")
    const playerNumber = document.getElementById("player-number")

    if (!playerName.value) {
        alert("Por favor, insira o nome do jogador.");
        return;
    } else if (!playerPosition.value) {
        alert("Por favor, insira a posição do jogador.");
        return;
    } else if (!playerNumber.value) {
        alert("Por favor, insira o número da camisa do jogador.");
        return;
    }

    const confirmation = confirm(`Você deseja confirmar a escalação do jogador ${playerName.value}?`)

    if (confirmation) {
        listPlayers(playerName.value, playerPosition.value, playerNumber.value)

        playerName.value = ""
        playerPosition.value = ""
        playerNumber.value = ""
    }
}

function removePlayer() {
    const playerNumber = document.getElementById("remove-player")

    if (!playerNumber.value) {
        alert("Por favor, insira o número da camisa do jogador.")
        return;
    }

    const confirmation = confirm(`Você deseja remover o jogador da escalação?`)

    if (confirmation) {
        removePlayerFromList(playerNumber.value)
        playerNumber.value = ""
    }
}

function removePlayerFromList(playerNumber) {
    const table = document.querySelectorAll("#listPlayers")[0].children
    const tableCSS = document.getElementById('listPlayers')

    if (table.length === 0) {
        alert("Não há nenhum jogador escalado")
        return;
    }

    for (let i = 2; i < table.length; i++) { // verifica cada item da tabela, começa do 2 pois 0 e 1 sao os titulos da tabela
        if (table[i].lastElementChild.innerText === playerNumber) { // caso ela encontre o elemento solicitado ela remove
            table[i].remove()
            if (table.length <= 2) { // se caso nao sobre nenhum jogador, ele remove todos os elementos
                table[1].remove()
                table[0].remove()
                tableCSS.style = ""
            }
            return;
        }
    }
    alert("Esse Jogador não está escalado!")
}

function listPlayers(playerName, playerPosition, playerNumber) {
    const tableListPlayers = document.getElementById("listPlayers")

    if (tableListPlayers.getElementsByTagName("th").length === 0) {
        const caption = document.createElement("caption")
        caption.innerText = "Lista de Escalação"
        const trTitles = document.createElement("tr")
        const thPlayerNameTitle = document.createElement("th")
        thPlayerNameTitle.innerText = "Nome do Jogador"
        const thPlayerPositionTitle = document.createElement("th")
        thPlayerPositionTitle.innerText = "Posição do Jogador"
        const thPlayerNumberTitle = document.createElement("th")
        thPlayerNumberTitle.innerText = "Número da Camisa"
        trTitles.append(thPlayerNameTitle, thPlayerPositionTitle, thPlayerNumberTitle);
        tableListPlayers.append(caption, trTitles);
        StyleCSS()
    }

    const trValue = document.createElement("tr")
    const tdPlayerName = document.createElement("td")
    tdPlayerName.innerText = playerName
    const tdPlayerPosition = document.createElement("td")
    tdPlayerPosition.innerText = playerPosition
    const tdPlayerNumber = document.createElement("td")
    tdPlayerNumber.innerText = playerNumber
    trValue.append(tdPlayerName, tdPlayerPosition, tdPlayerNumber)
    tableListPlayers.appendChild(trValue)
    StyleCSS()
}

function StyleCSS() {
    const elements = document.querySelectorAll("table, th, td")
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "4px black solid"
        elements[i].style.margin = "8% auto 0px auto"
    }
}
