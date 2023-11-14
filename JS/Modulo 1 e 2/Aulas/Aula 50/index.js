// High order function

/*As funções de ordem superior são um conceito importante em programação funcional, 
e elas desempenham um papel fundamental em linguagens como JavaScript. Em JavaScript, 
as funções são consideradas cidadãos de primeira classe, o que significa que podem ser 
tratadas como qualquer outra variável, como números, strings ou objetos. Funções de ordem superior 
são aquelas que podem receber outras funções como argumentos e/ou retornar funções como resultados. 
Isso permite uma abstração poderosa e flexível no código.*/

function listar (elemento, indice, array){
    console.log(
        elemento,
        indice,
        array,    )
}

const list = ["Banana", "Laranja", "Uva", "Abacaxi", "Mamão", "Melancia"]

for(let i = 0; i < list.length; i++){
    listar(list[i], i, list)
} // Exercuta a mesma função, mas utiliza uma estrutura de repetição!

list.forEach(listar) // Exercuta a mesma função, porem o callback é uma função comum

list.forEach(function(elemento, indice, array){
    console.log(
        elemento,
        indice,
        array
    )
}) // Exercuta a mesma função, mas o callback é uma função anonima

/*O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. 
Ele não é invocado para propriedades de índices que foram deletados ou que não foram 
inicializados (por ex. em arrays esparsos).*/