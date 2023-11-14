// Metodos de funcoes, ela atribui uma função a um objeto! podendo chamalo referenciando o objeto e depois a função

let user = {
    name: "Jorge Luiz",
    birhDayYear: 2002,
    hello(){
        let yearNow = 2023
        console.log("Ola " + this.name + " Você tem " + (yearNow - this.birhDayYear) + " Anos\nNascido em: " + this.birhDayYear +"\nAno Atual: " + yearNow)
    }
}

user.hello()