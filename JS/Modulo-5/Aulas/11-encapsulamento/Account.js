class Account {
    #password
    #balance
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.#password = password
        this.#balance = 0
    }
    
    redefinePassword(email, password, newPassword){
        if(this.#authenticate(email, password)){
            this.#password = newPassword
            return `${this.name}, sua senha foi alterada com sucesso!`
        }else{
            return "Senha ou Email incorretos!"
        }
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance
        }else{
            return "Senha ou Email incorretos!"
        }
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password
    }
}

module.exports = Account