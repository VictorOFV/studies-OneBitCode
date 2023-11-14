import { editTransation, deleteTransation } from "./assets/buttons-functions.js"
import animateValue from "./assets/animate-value.js"

let indice = {
    total: 0,
    sent: 0,
    receive: 0
}

async function getTransations() {
    const transation = await fetch("http://localhost:3000/transations").then(result => result.json())
    transation.forEach(showTransation)
    showTotalValue()
}

function showTransation({ name, id, type, value }) {
    const transation = createElement("div", { id: id, classList: "info fade-in"})
    const nameTransation = createElement("h2", { innerText: name })
    const typeTransation = createElement("p", { innerText: `Tipo da Transação: ${type === 'received' ? "Recebido" : "Enviado"}` })
    const titleValue = createElement("p", { innerText: "Valor da Transação: "})
    const valueTransation = createElement("span", { innerText: `${Intl.NumberFormat("PT-BR", { currency: "BRL", style: "currency"}).format(value)}`, classList: type === "received" ? "green-text" : "red-text"})
    const divButtons = createElement("div", { classList: "divButtons" })
    const buttonDelete = createElement("button", { innerText: "Deletar", id: id })
    const buttonEdit = createElement("button", { innerText: "Editar", id: id })
    
    titleValue.append(valueTransation)
    divButtons.append(buttonEdit, buttonDelete)
    transation.append(nameTransation, typeTransation, titleValue, divButtons)
    document.querySelector(".transations").append(transation)
    addEvent(buttonDelete, buttonEdit)
}

export function createElement(element, options) {
    const createElement = document.createElement(element)
    Object.assign(createElement, options)
    return createElement
}

function addEvent(buttonDelete, buttonEdit) {
    buttonDelete.addEventListener("click", deleteTransation)
    buttonEdit.addEventListener("click", editTransation)
}

export async function showTotalValue() {
    const transation = await fetch("http://localhost:3000/transations").then(result => result.json())
    const sentvalue = transation.filter(value => value.type === "sent").reduce((initialValue, currentValue) => currentValue.value + initialValue, 0)
    const receivedValue = transation.filter(value => value.type === "received").reduce((initialValue, currentValue) => currentValue.value + initialValue, 0)
    const pReceivedvalue = document.getElementById("receivedValue")
    const pSentValue = document.getElementById("sentValue")
    const pTotalValue = document.getElementById("totalValue")

    animateValue(pReceivedvalue, indice.receive, receivedValue, 1.5)
    animateValue(pSentValue, indice.sent, sentvalue, 1.5)
    animateValue(pTotalValue, indice.total, receivedValue - sentvalue, 1.5)

    indice.receive = receivedValue
    indice.sent = sentvalue
    indice.total = receivedValue - sentvalue
}

async function submit(event) {
    event.preventDefault()

    const name = document.querySelector("#name").value
    const value = parseFloat(document.querySelector("#value").value)
    const type = document.querySelector("#type").value

    if (!name) {
        alert("Por favor, adicione um nome para a transação.")
        return
    } else if (isNaN(value) || !value) {
        alert("Por favor, insira um valor numérico.")
        return
    } else if (!type || type !== "received" && type !== "sent") {
        alert("Por favor, selecione um opção valida!")
        return
    } else {
        const transation = await fetch("http://localhost:3000/transations", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, type, value })
        }).then(result => result.json())

        showTransation(transation)
        showTotalValue()
        document.querySelector("form").reset()
    }
}

document.querySelector("form").addEventListener("submit", submit)
document.addEventListener("DOMContentLoaded", getTransations)