const calculatorForm = document.getElementById("calculatorForm")

calculatorForm.addEventListener("submit", function(e){

    const dataForm = new FormData(calculatorForm)
    const value1 = parseFloat(dataForm.get("number1"))
    const value2 = parseFloat(dataForm.get("number2"))

    let some =  value1 + value2
    let subtraction = value1 - value2
    let multiplication = value1 * value2
    let division = value1 / value2

    const elements = document.querySelectorAll("#value1");
    elements.forEach((element) => {
    element.innerHTML = value1;
    });

    const elements2 = document.querySelectorAll("#value2");
    elements2.forEach((elements2) => {
    elements2.innerHTML = value2;
    });

    document.getElementById("resultSome").innerHTML = some
    document.getElementById("resultSubtraction").innerHTML = subtraction
    document.getElementById("resultMultiplication").innerHTML = multiplication
    document.getElementById("resultDivision").innerHTML = division

    e.preventDefault()
})