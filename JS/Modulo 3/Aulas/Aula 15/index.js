const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const main = document.querySelector('main')
const root = document.querySelector(":root")

function calculate() {
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

document.querySelectorAll(".charKey").forEach(function (key) {
    key.addEventListener('click', function () {
        const value = key.dataset.value
        input.value += value
    })
})

document.getElementById("clear").addEventListener('click', function () {
    input.value = ""
    resultInput.value = ""
    input.focus()
})

document.getElementById("equal").addEventListener('click', calculate)

input.addEventListener("keypress", function (event) {
    event.preventDefault()
    if (allowedKeys.includes(event.key)) {
        input.value += event.key
    }

    if (event.key === "Enter") {
        calculate()
    }

    if (event.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
})

document.getElementById("copyToClipboard").addEventListener('click', function (event) {
    const button = event.currentTarget

    if (button.classList.value === "sucess") {
        button.innerText = "Copiar"
        button.classList.remove("sucess")
    } else {
        button.innerText = "Copiado"
        button.classList.add("sucess")
        navigator.clipboard.writeText(resultInput.value)
    }

})

document.getElementById("themeSwitch").addEventListener('click', function (event) {
    const button = event.currentTarget

    if (main.dataset.theme === "darkMode") {
        button.innerText = "Dark Mode"
        root.style.setProperty("--bg-color", "#f1f6f9")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--primary-color", "#0ba446")
        main.dataset.theme = "whiteMode"
    } else {
        button.innerText = "White Mode"
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--font-color", "#f1f6f9")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--primary-color", "#00ff62")
        main.dataset.theme = "darkMode"
    }
})