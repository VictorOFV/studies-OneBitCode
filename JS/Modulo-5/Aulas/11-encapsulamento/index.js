const Account = require("./Account")

const user = new Account("Victor Manoel", "victormanoellopesporto@gmail.com", "40028922") // Criando o usario com nome, email e senha
console.log(user)

console.log(user.getBalance("victormanoellopesporto@gmail.com", "40028922")) // puxando os valores da conta pelo metodo criado
console.log(user.redefinePassword("victormanoellopesporto@gmail.com", "40028922", "teste")) // redefinindo a senha da conta
console.log(user.getBalance("victormanoellopesporto@gmail.com", "40028922")) // retorando senha incorreta pois a senha nao e mais a mesma