let currentPlayerText = "X"
const p = document.getElementById("currentTextPlayer")
const cells = document.querySelectorAll(".buttons")
const winCombinations = [
    ["A1", 'A2', "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", 'C3'],
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
    ["A1", 'B2', "C3"],
    ["A3", "B2", "C1"]
]

function getPlayerNames() { //Função Auxiliar que pega os nomes dos jogadores
    const player1 = document.getElementById("player1")
    const player2 = document.getElementById("player2")

    if (!player1.value || !player2.value) {
        alert("Por favor, insira os nomes dos jogadores!")
        return null
    } else {
        return { player1: player1.value, player2: player2.value }
    }
}

function startGame() { // função principal que inicia o jogo
    const players = getPlayerNames()
    if (players === null) return
    updateCurrentPlayerText(players)
    addClickListenerToCells()
    restart()
}

function addClickListenerToCells() { // função principal que faz com que o usuario faça o seu movimento
    cells.forEach(function (button) {
        button.addEventListener("click", function () {
            
            if (button.innerText === "X" || button.innerText === "O") return
            if (checkWinner()) return

            button.innerText = currentPlayerText
            button.classList.remove("cursor-pointer")
            currentPlayerText = currentPlayerText === "X" ? "O" : "X"
            updateCurrentPlayerText(getPlayerNames())
        })
    })
}

function updateCurrentPlayerText(name) { // função principal que atualiza a interface para os jogadores
    const player = currentPlayerText === "X" ? name.player1 : name.player2
    const playerTextColor = currentPlayerText === "X" ? "nameTextGreen" : "nameTextRed"
    const lastPlayer = currentPlayerText === "O" ? name.player1 : name.player2
    const lastPlayerTextColor = currentPlayerText === "O" ? "nameTextGreen" : "nameTextRed"
    p.innerHTML = `Vez de <span class="${playerTextColor}">${player}</span>`

    if (checkWinner()) {
        p.innerHTML = `Ganhador: <span class="${lastPlayerTextColor}">${lastPlayer}</span>`
    }

    if (checkDraw()) {
        p.innerText = "Houve um Empate!"
        cells.forEach(function (button) {
            button.classList.add("drawn")
        })
    }
}

function checkWinner() { // função auxiliar que verifica o jogador que ganhou
    for (let i = 0; i < winCombinations.length; i++) {
        const [cell1, cell2, cell3] = winCombinations[i];
        const cell1Text = document.getElementById(cell1)
        const cell2Text = document.getElementById(cell2)
        const cell3Text = document.getElementById(cell3)

        if (cell1Text.innerText === cell2Text.innerText && cell2Text.innerText === cell3Text.innerText && cell1Text.innerText !== '""') {
            if (cell1Text.innerText === "X") {
                cell1Text.classList.add("nameTextGreen")
                cell2Text.classList.add("nameTextGreen")
                cell3Text.classList.add("nameTextGreen")
            } else {
                cell1Text.classList.add("nameTextRed")
                cell2Text.classList.add("nameTextRed")
                cell3Text.classList.add("nameTextRed")
            }
            return true
        }
    }
    return false
}

function checkDraw() { // função auxiliar que verifica se o jogo terminou em empate
    if (!checkWinner() && [...cells].every(button => button.innerText !== '""')) {
        return true
    }
    return false
}

function restart() {
    const button = document.getElementById("startButton")

    if (button) {
        button.innerText = "Reiniciar"
        button.id = "restart"

        button.addEventListener("click", function () {
            cells.forEach(function (cell) {
                cell.classList.remove("nameTextGreen")
                cell.classList.remove("nameTextRed")
                cell.classList.remove("drawn")
                cell.classList.add("cursor-pointer")
                cell.innerText = '""'
                p.innerText = ""
                currentPlayerText = "X"
                updateCurrentPlayerText(getPlayerNames())
            })
        })
    }
}

document.getElementById("startButton").addEventListener("click", startGame)