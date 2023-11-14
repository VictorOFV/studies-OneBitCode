// Caso 1 de rest paraments
function some(...arguments) {
    return arguments.reduce((currentValue, elem) => currentValue + elem, 0)
}

console.log(some(2, 2, 7, 8, 9, 10, 12, 14, 12, 20, 25, 26))

// Caso 2 de rest paraments

function getArguments(item1, ...arguments) {
    return { item1, arguments }
}

console.log(getArguments("Victor o gostoso!", "YOutube", "Lula Ladrao", "Xandao na cadeia", "Estamos vivendo uma ditadura silenciosa!"))