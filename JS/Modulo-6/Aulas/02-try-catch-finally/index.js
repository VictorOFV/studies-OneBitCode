function sum(a, b) {
    const valueConvertA = Number(a)
    const valueConvertB = Number(b)

    if (isNaN(valueConvertA) || isNaN(valueConvertB)) {
        throw new Error("Os valores devem ser numeros!")
    }

    return valueConvertA + valueConvertB
}

try { // tenta excutar o codigo se não conseguir ele cai no block catch para o trataamento do erro
    console.log(sum(2, 3))
    console.log(sum(24, "12"))
    console.log(sum(11, true))
    //console.log(sum(undefined, 9))
    console.log(sum(2, 0))
} catch (e) { // trata o erro
    console.log(e)
} finally { // executa sempre, idependente se caiu no bloco catch ou não
    console.log("Finalizando a Aplicação")
}

console.log(sum(2, 7))