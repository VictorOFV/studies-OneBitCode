const Account = require("./entities/Account")
const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

class App {

    static #database = []

    static get data() {
        return App.#database
    }

    static createAccount(name, email, password) {
        const userExist = this.findUser(email)
        if (!userExist) {
            const user = new User(name, email, password)
            const account = new Account(user)
            App.#database.push(account)
        } else {
            throw new Error(`A conta de email ${email}, não existe!`)
        }

    }

    static findUser(email) {
        return App.#database.find(({ user }) => user.email === email)
    }

    static loan(email, value, number) {
        const userExist = this.findUser(email)
        if (userExist) {
            const loan = new Loan(value, number)
            userExist.loan(loan)
        } else {
            throw new Error(`A conta de email ${email}, não existe!`)
        }
    }

    static deposit(email, value) {
        const userExist = this.findUser(email)
        if (userExist) {
            const deposit = new Deposit(value)
            userExist.deposit(deposit)
        } else {
            throw new Error(`A conta de email ${email}, não existe!`)
        }
    }

    static transfer(emailUserReceive, emailUserSender, value) {
        const userReceiveExist = this.findUser(emailUserReceive)
        const userSenderExist = this.findUser(emailUserSender)
        if (userReceiveExist && userSenderExist) {
            const transfer = new Transfer(userSenderExist, userReceiveExist, value)
            userReceiveExist.transfer(transfer)
            userSenderExist.transfer(transfer)
        } else {
            if(!userReceiveExist){
                throw new Error(`A conta de email ${emailUserReceive}, não existe!`)
            }else if(!userSenderExist){
                throw new Error(`A conta de email ${emailUserSender}, não existe!`)
            }
        }
    }

    static fees(fee) {
        Loan.fees = fee
    }
}

module.exports = App