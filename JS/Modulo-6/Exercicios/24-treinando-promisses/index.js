function calculateIMC(weight, height) {
    return new Promise((resolve, reject) => {
        if (isNaN(weight) || isNaN(height)) {
            reject("Os valores de peso e altura não são um número")
        } else {
            resolve(weight / (height * height))
        }
    })
}

function showIMC(weight, height) {
    calculateIMC(weight, height).then((result) => {
        if (result < 18.5) {
            console.log(`seu IMC é ${result} e você está em estado de MAGREZA`)
        } else if (result > 18.5 && result < 24.9) {
            console.log(`seu IMC é ${result} e você está em estado NORMAL`)
        } else if (result > 25 && result < 29.9) {
            console.log(`seu IMC é ${result} e você está em estado de SOBREPESO`)
        } else if (result > 30 && result < 39.9) {
            console.log(`seu IMC é ${result} e você está em estado de OBESIDADE`)
        } else {
            console.log(`seu IMC é ${result} e você está em estado de OBESIDADE GRAVE`)
        }
    }).catch((e) => {
        console.log(`Falha ao exucutar a promisse! Motivo: ${e}`)
    })
}

showIMC(50, 1.60)
showIMC(80, 1.80)
showIMC(72, 1.65)
showIMC("A", 1.60)
showIMC(140, 1.71)