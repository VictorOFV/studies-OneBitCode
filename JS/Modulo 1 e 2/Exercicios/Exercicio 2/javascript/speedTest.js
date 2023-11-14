const form = document.getElementById("speedTestForm")

function StyleCSS() {
    document.getElementById("result-name").innerHTML = "Resultado:"
    document.getElementById("result").style.marginLeft = "7px"
    document.getElementById("result").style.border = "2px black solid"
    document.getElementById("result").style.padding = "0px 15px 0px 4px"
    document.getElementById("result").style.backgroundColor = "white"
    document.getElementById("result").style.color = "#009d00"
    document.getElementById("result-container").style.display = "flex"
    document.getElementById("result-container").style.justifyContent = "flex-end"
}

form.addEventListener('submit', function (e) {
    const data = new FormData(form)
    const car1Name = data.get("car1Name")
    const car1Speed = parseFloat(data.get("car1Speed"))
    const car2Name = data.get("car2Name")
    const car2Speed = parseFloat(data.get("car2Speed"))

    if (car1Speed > car2Speed) {
        const result = `O carro ${car1Name} é o mais rapido!`
        document.getElementById("result").innerHTML = result
        StyleCSS()
    }
    else if (car1Speed < car2Speed) {
        const result = `O carro ${car2Name} é o mais rapido!`
        document.getElementById("result").innerHTML = result
        StyleCSS()
    }
    else {
        const result = `Os carros ${car1Name} e ${car2Name} tem as mesmas velocidades!`
        document.getElementById("result").innerHTML = result
        StyleCSS()
    }
    e.preventDefault()
})

const obj = {
    array: ["maça", "banana", "..."],
    fruit: "Banana"
}