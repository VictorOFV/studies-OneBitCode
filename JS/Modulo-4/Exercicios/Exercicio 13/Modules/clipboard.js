function clipboard(event) {
    const resultInput = document.getElementById("result")
    const button = event.currentTarget

    if (button.classList.value === "sucess") {
        button.innerText = "Copiar"
        button.classList.remove("sucess")
    } else {
        button.innerText = "Copiado"
        button.classList.add("sucess")
        navigator.clipboard.writeText(resultInput.value)
    }

}

export { clipboard }