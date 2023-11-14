let option = null

function menu(){
    option = parseFloat(prompt(
        "Olá! seja bem vindo(a) ao menu de calculadora geométrica!\n\n" +
        "1. Calcular a área do triângulo\n" +
        "2. Calcular a área do retângulo\n" +
        "3. Calcular a área do quadrado\n" +
        "4. Calcular a área do trapézio\n" +
        "5. Calcular a área do circulo\n" +
        "6. Sair"
    ))
    return option;
}

function calculateTriangleArea(base, height){

    const area = (base * height) / 2

    if(isNaN(base) || isNaN(height)){
        return "Os valores da base e da altura devem ser números"
    }else if(base < 0 || height < 0){
        return "Os valores da base e da altura devem ser números positivos"
    }else{
        return "O valor da área do triangulo é igual a " + area
    }
}

function calculateRectangleArea(base, height){

    const area = base * height

    if(isNaN(base) || isNaN(height)){
        return "Os valores da base e da altura devem ser números"
    }else if(base < 0 || height < 0){
        return "Os valores da base e da altura devem ser números positivos"
    }else{
        return "O valor da área do retângulo é igual a " + area
    }
}

function calculateSquareArea(side){

    const area = side * side

    if(isNaN(side)){
        return "O valor do lado do quadrado devem ser números"
    }else if(side < 0){
        return "O valor do lado do quadrado devem ser números positivos"
    }else{
        return "O valor da área do quadrado é igual a " + area
    }
}

function calculateTrapezeArea(biggerBase, lowestBase, height){

    const area = (biggerBase + lowestBase) * height / 2

    if(isNaN(biggerBase) || isNaN(lowestBase) || isNaN(height)){
        return "Os valores da base maior, base menor e da altura devem ser números"
    }else if(biggerBase < 0 || lowestBase < 0 || height < 0){
        return "Os valores da base maior, base menor e da altura devem ser números positivos"
    }else{
        return "O valor da área do trapézio é igual a " + area
    }
}

function calculateCircleArea(radius){

    const area = Math.PI * (radius * radius)

    if(isNaN(radius)){
        return "O valor do raio deve ser um número"
    }else if(radius < 0){
        return "O valor do raio deve ser um número positivo"
    }else{
        return "O valor da área do circulo é igual a " + area
    }
}

do {

    option = menu();
    
    let result;

    switch(option){
        case 1:
            result = calculateTriangleArea(
                parseFloat(prompt("Digite o valor da base do triângulo")),
                parseFloat(prompt("Digite o valor da altura do triãngulo")))
            break;
        case 2:
            result = calculateRectangleArea(
                parseFloat(prompt("Digite o valor da base do retângulo")),
                parseFloat(prompt("Digite o valor da altura do retângulo")))
            break;
        case 3:
            result = calculateSquareArea(
                parseFloat(prompt("Digite o lado do quadrado")))
            break;
        case 4:
            result = calculateTrapezeArea(
                parseFloat(prompt("Digite o valor da base maior do trapézio")),
                parseFloat(prompt("Digite o valor da base menor do trapézio,")),
                parseFloat(prompt("Digite o valor da altura do trapézio")))
            break;
        case 5:
            result = calculateCircleArea(
                parseFloat(prompt("Digite o valor do raio do circulo")))
            break;
        case 6:
            alert("Encerrando Programa...")
            break;
        default:
            alert("Não consegui identificar a opção desejada!")
    }

    if(result){
        alert(result)
    }
    
} while (option !== 6);