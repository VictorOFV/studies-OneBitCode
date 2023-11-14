import { calculate } from "./calculater.js"

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

function keyPress(event) {
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
}

function charKey(key) {
    key.addEventListener('click', function () {
        const value = key.dataset.value
        input.value += value
    })
}

export { charKey, keyPress }