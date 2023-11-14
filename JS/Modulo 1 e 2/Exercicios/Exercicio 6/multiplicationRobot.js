let number = parseFloat(prompt("Digite um numero para ser calculado na multiplicação"));
let result = "";

for(let i = 1; i <= 20; i++){
    result += "\n" + number + " X "+ i + " = " + number * i;
}

alert("Resultado:\n" + result);
alert("Finalizando Programa...");