const input = document.getElementById("input")
const resultInput = document.getElementById("result")


function clear() {
    input.value = ""
    resultInput.value = ""
    input.focus()
}

export { clear }