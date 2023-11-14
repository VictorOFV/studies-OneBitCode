function addInputs(){
    const ul = document.getElementById("new-inputs")

    const newLi = document.createElement("li")
    newLi.innerText = "Inputs: "

    const inputs = document.createElement("input")
    inputs.type = "text"
    inputs.placeholder = "One Bit Code"

    newLi.appendChild(inputs)
    ul.appendChild(newLi)
}