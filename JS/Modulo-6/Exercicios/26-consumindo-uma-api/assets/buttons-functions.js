import { createElement, showTotalValue } from "../index.js"

export async function deleteTransation(button) {
    const element = document.getElementById(button.target.id)

    if (element) {
        const confirm = window.confirm(`Você deseja excluir a transação ${element.children.item(0).textContent} ?`)

        if (confirm) {
            await fetch(`http://localhost:3000/transations/${element.id}`, { method: "DELETE" })
            element.remove()
            showTotalValue()
        }
    }

}

export async function editTransation(button) {
    const element = document.getElementById(button.target.id)

    if (element) {
        const oldTransation = await fetch(`http://localhost:3000/transations/${element.id}`).then(result => result.json())

        const inputs = createElement("div", { id: "inputs", classList: "inputsEdit fade-in" })
        const labelTransation = createElement("label", { htmlFor: "editTrasation", innerText: "Nome da Transação:" })
        const inputTransation = createElement("input", { type: "text", id: "editTrasation", value: oldTransation.name })
        const labelType = createElement("label", { innerText: "Tipo:", htmlFor: "editType" })
        const select = createElement("select", { id: "editType", required: true })
        const optionSent = createElement("option", { text: "Enviado", value: "sent", selected: oldTransation.type === "sent" ? true : false })
        const optionReceived = createElement("option", { text: "Recebido", value: "received", selected: oldTransation.type === "received" ? true : false })
        const labelValue = createElement("label", { htmlFor: "editValue", innerText: "Valor:" })
        const inputValue = createElement("input", { type: "text", id: "editValue", value: oldTransation.value })
        const button = createElement("button", { innerText: "Atualizar" })

        select.append(optionSent, optionReceived)
        inputs.append(labelTransation, inputTransation, labelType, select, labelValue, inputValue, button)
        element.appendChild(inputs)

        button.addEventListener("click", async () => {
            const transation = await fetch(`http://localhost:3000/transations/${element.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: inputTransation.value, value: parseFloat(inputValue.value), type: select.value })
            }).then(result => result.json())

            element.children.item(0).innerText = transation.name
            element.children.item(1).innerText = `Tipo da Transação: ${transation.type === 'received' ? "Recebido" : "Enviado"}`
            element.children.item(2).innerText = `Valor da Transação: `
            element.children.item(2).append(createElement("span", { innerText: `${Intl.NumberFormat("PT-BR", { currency: "BRL", style: "currency" }).format(transation.value)}`, classList: transation.type === "received" ? "green-text" : "red-text" }))

            const updateText = createElement("p", { innerText: "Atualizado com sucesso!" })
            inputs.appendChild(updateText)
            inputs.classList.add("fade-out")
            showTotalValue()
            setTimeout(() => {
                inputs.remove()
            }, 1000 * 5)
        })
    }
}
