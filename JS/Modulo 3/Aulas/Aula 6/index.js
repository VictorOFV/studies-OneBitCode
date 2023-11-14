function addContact(){
    const divContainer = document.getElementById("container-list")

    const h3 = document.createElement("h3")
    h3.innerText = "Contato"

    const ul = document.createElement("ul")

    const liName = document.createElement("li")
    liName.innerText = "Nome: "
    const inputName = document.createElement("input")
    inputName.type = "text"
    liName.appendChild(inputName)
    ul.appendChild(liName)

    const liPhone = document.createElement("li")
    liPhone.innerText = "Telefone: "
    const inputPhone = document.createElement("input")
    inputPhone.type = "text"
    liPhone.appendChild(inputPhone)
    ul.appendChild(liPhone)

    const liAdress = document.createElement("li")
    liAdress.innerText = "Endereço: "
    const inputAdress = document.createElement("input")
    inputAdress.type = "text"
    liAdress.appendChild(inputAdress)
    ul.appendChild(liAdress)

    divContainer.append(h3, ul)
}

function removeContact(){
    const divContainer = document.getElementById("container-list")
    const h3 = divContainer.getElementsByTagName("h3")
    const ul = divContainer.getElementsByTagName("ul")

    const confimation = confirm(
        "deseja realmente excluir o contato?"
    )

    if(confimation){
        divContainer.removeChild(h3[h3.length - 1])
        divContainer.removeChild(ul[ul.length - 1])
    }
}