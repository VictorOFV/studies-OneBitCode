function calculate() {
    const resultInput = document.getElementById("result")

    try {
        const result = eval(input.value)

        if (result === undefined) return

        resultInput.value = result
        resultInput.classList.remove("error")
    } catch (e) {
        resultInput.classList.add("error")
        resultInput.value = "ERRO"
    }
}

export { calculate }