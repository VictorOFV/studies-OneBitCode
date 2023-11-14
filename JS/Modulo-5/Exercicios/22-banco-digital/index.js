const App = require("./App")

App.createAccount("Victor Manoel", "victor@email.com", 123)
App.createAccount("Rebecca Ferrerira", "rebecca@email.com", 321)
App.createAccount("Luiza Fernandes", "luiza@email.com", 890)

App.deposit("victor@email.com", 500)
App.transfer("rebecca@email.com", "victor@email.com", 100)

App.fees(25)
App.loan("luiza@email.com", 7000, 12)

console.log(App.findUser("victor@email.com").wallet)
console.log(App.findUser("victor@email.com"))

console.log(App.findUser("rebecca@email.com").wallet)
console.log(App.findUser("rebecca@email.com"))

console.log(App.findUser("luiza@email.com").wallet)
console.log(App.findUser("luiza@email.com"))
console.log(App.findUser("luiza@email.com").allLoans[0].installments)