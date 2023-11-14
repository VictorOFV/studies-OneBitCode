async function calculateIMC(weight, height) {
    if (!weight || !height) {
        return Promise.reject(new Error("Não foi informado nenhum paramentro"))
    } else if (isNaN(weight) || isNaN(height)) {
        return Promise.reject(new Error("Os argumetos informados não são um número"))
    } else {
        return weight / (height * height)
    }
}

async function showIMC(weight, height) {    
    console.log(`Calculando o IMC do Peso: ${weight} e Altura: ${height}`)
    try {
        const value = await calculateIMC(weight, height)

        if (value < 18.5) {
            console.log(`seu IMC é ${value} e você está em estado de MAGREZA`)
        } else if (value > 18.5 && value < 24.9) {
            console.log(`seu IMC é ${value} e você está em estado NORMAL`)
        } else if (value > 25 && value < 29.9) {
            console.log(`seu IMC é ${value} e você está em estado de SOBREPESO`)
        } else if (value > 30 && value < 39.9) {
            console.log(`seu IMC é ${value} e você está em estado de OBESIDADE`)
        } else {
            console.log(`seu IMC é ${value} e você está em estado de OBESIDADE GRAVE`)
        }
    } catch (error) {
        console.log(`Houve um erro inesperado! Erro: ${error.message}`)
    }
}

showIMC(50, 1.60)
showIMC(70, 1.72)
showIMC(90, 1.60)
showIMC("a", 1.60)
showIMC(21, 1.60)