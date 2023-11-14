let option;

function menu(){
    option = parseInt(prompt(
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

function TriangleArea(){
    const base = parseFloat(prompt("Por favor, informe o comprimento da base do triângulo:"))
    const height = parseFloat(prompt("Por favor, informe a altura do triângulo:"))
    return base * height / 2;
}

function RectangleArea(){
    const base = parseFloat(prompt("Por favor, informe o comprimento do retângulo:"))
    const height = parseFloat(prompt("Por favor, informe a largura do retângulo:"))
    return base * height;
}

function SquareArea(){
    const side = parseFloat(prompt("Por favor, informe o comprimento de um dos lados do quadrado:"))
    return side * side;
}

function TrapezeArea(){
    const majorBase = parseFloat(prompt("Por favor, informe o comprimento da base maior do trapézio:"))
    const minorBase = parseFloat(prompt("Por favor, informe o comprimento da base menor do trapézio:"))
    const height = parseFloat(prompt("Por favor, informe a altura do trapézio:"))
    return (majorBase + minorBase) * height / 2;
}

function CircleArea(){
    const radius = parseFloat(prompt("Por favor, insira o valor do raio do círculo:"))
    return Math.PI * (radius * radius);
}

function execute(){

    do {

        option = menu();

        let result;

        switch(option){
            case 1:
                result = TriangleArea();
                break;
            case 2:
                result = RectangleArea();
                break;
            case 3:
                result = SquareArea();
                break;
            case 4:
                result = TrapezeArea();
                break;
            case 5:
                result = CircleArea();
                break;
            case 6:
                alert("Você Você está prestes a sair do programa...");
                break;
            default:
                alert("Por favor, tente novamente. A opção desejada não pôde ser identificada.");
        }

        if(result){
            alert(result);
        }else{
            alert("Por favor, informe valores válidos!");
        }

    } while (option !== 6);
}

execute();