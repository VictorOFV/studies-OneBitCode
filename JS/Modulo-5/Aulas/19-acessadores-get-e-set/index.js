class Account {
    #name
    #wallet

    constructor() {
        this.#name = "Lucas"
        this.#wallet = 120
    }

    get name() {
        return this.#name
    }

    set name(newName) {
        if (typeof newName === "string") {
            this.#name = newName
        } else {
            console.log("isso nao e uma string")
        }
    }

    get wallet() {
        return this.#wallet
    }

    set wallet(value) {
        if (typeof value === "number") {
            this.#wallet = value
        }else{
            console.log("isso nao e um numero")
        }
    }
}

const lucas = new Account()

console.log(lucas.name)
lucas.name = "Lucas Henrique"
console.log(lucas.name)

console.log(lucas.wallet)
lucas.wallet += 50
console.log(lucas.wallet)
lucas.wallet -= 10
console.log(lucas.wallet)
lucas.wallet = "ROi"

// Basicamente os get e set sao identicas aos metodos, porem ele facilita na hora que voce vai codar por exemplo
// voce quer atualizar o valor privado de wallet, se voce fosse utilizar uma função daria um pouco mais de trabalho
// para somente setar o novo valor do atributo, com get e set podemos simplesmente coolocar intance.wallet = 2 ou += 2 etc...
// nos get e set também e possivel fazer verificações dos parametros recebidos para nao setar um valor indesejado!
// fazendo isso facilita muito mais usar get e set do que metodos. Mas vale lembrar que metodos tambem sao muito importantes
// não e por isso que vamos nos desfazer dos metodos!