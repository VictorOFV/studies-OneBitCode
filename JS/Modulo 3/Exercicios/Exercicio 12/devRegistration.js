const devsArray = []

let technologyIndex = 0
let radioIndex = 0

function createNewElements() {
    const div = document.getElementById("technology")
    const newDiv = document.createElement("div")

    if (!document.getElementById("button-register") && !document.getElementById("button-remove")) {
        createNewButtons()
    }

    const technologyInputs = [{ id: `technology${technologyIndex}`, type: "text", label: "Nome da Tecnologia:" }]

    technologyInputs.forEach(function (input) {
        const labelTechnology = document.createElement("label")
        const inputTechnology = document.createElement("input")
        const lineBreak = document.createElement("br")
        labelTechnology.innerText = input.label
        labelTechnology.htmlFor = input.id
        inputTechnology.type = input.type
        inputTechnology.id = input.id
        newDiv.append(labelTechnology, inputTechnology, lineBreak)
        div.appendChild(newDiv)
        technologyIndex++
    });

    const radioInputs = [
        { id: `radio${radioIndex}_0`, label: "0 - 2 Anos", type: "radio", name: `radio${radioIndex}`, value: "0 - 2 Anos" },
        { id: `radio${radioIndex}_1`, label: "3 - 4 Anos", type: "radio", name: `radio${radioIndex}`, value: "3 - 4 Anos" },
        { id: `radio${radioIndex}_2`, label: "5+ Anos", type: "radio", name: `radio${radioIndex}`, value: "5+ Anos" }
    ];

    radioInputs.forEach(function (radio) {
        const radioInput = document.createElement("input")
        const radioLabel = document.createElement("label")
        radioLabel.innerText = radio.label
        radioLabel.htmlFor = radio.id
        radioInput.id = radio.id
        radioInput.type = radio.type
        radioInput.name = radio.name
        radioInput.value = radio.value
        newDiv.append(radioInput, radioLabel)
    });
    radioIndex++;
}

function createNewButtons() {
    const buttonsDiv = document.getElementById("buttons")
    const buttons = [
        { id: "button-register", name: "Cadastrar Tecnologia", type: "button" },
        { id: "button-remove", name: "Remover Tecnologia", type: "button" }
    ];

    buttons.forEach(function (button) {
        const createButton = document.createElement("button")
        createButton.id = button.id
        createButton.innerText = button.name
        createButton.type = button.type
        buttonsDiv.appendChild(createButton)
    });

    const buttonRemoveElement = document.getElementById("button-remove")
    buttonRemoveElement.addEventListener("click", removeElement)
    const buttonRegister = document.getElementById("button-register")
    buttonRegister.addEventListener("click", register)
}

function register(event) {
    const nameInput = document.getElementById("name")
    const elements = event.target.form.children[2].children
    const technologyResults = []

    for (let i = 0; i < elements.length; i++) {
        const timeInput = document.querySelector(`input[name='radio${i}']:checked`)
        const technologyInput = document.getElementById(`technology${i}`)

        if (!nameInput.value) {
            alert("Por favor! insira o seu nome")
            return;
        } else if (!technologyInput || !technologyInput.value) {
            alert(`Por favor! insira o nome da tecnologia na ${i + 1}ª fileira`)
            return;
        } else if (!timeInput) {
            alert(`Por favor, selecione o tempo que você utiliza a linguagem na ${i + 1}ª fileira`)
            return;
        } else {
            technologyResults.push({ technologyInput: technologyInput.value, timeInput: timeInput.value })
        }
    }

    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].remove()
    }

    devsArray.push({ name: nameInput.value, technologyResults });
    nameInput.value = "";
    buttonsRemove()
    radioIndex = 0
    technologyIndex = 0
    console.log(devsArray)
}

function removeElement(event) {
    const elements = event.target.form.children[2].children;
    elements[elements.length - 1].remove()
    if (elements.length === 0) {
        buttonsRemove()
    }
    technologyIndex--
    radioIndex--
}

function buttonsRemove() {
    const buttonRegister = document.getElementById("button-register")
    const buttonRemove = document.getElementById("button-remove")
    buttonRegister.remove()
    buttonRemove.remove()
}

const buttonCreateLine = document.getElementById("button")
buttonCreateLine.addEventListener("click", createNewElements)