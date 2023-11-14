class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if(email === this.email && password === this.password){
            console.log(`${this.fullname}, Login Realizado com sucesso!`)
        }else{
            console.log("Email ou senha incorreta!")
        }
    }
}

export default User