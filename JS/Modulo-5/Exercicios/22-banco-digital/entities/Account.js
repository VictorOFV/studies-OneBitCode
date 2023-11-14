const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

class Account {
    #wallet = 0
    constructor(user) {
        this.allTransfers = []
        this.allLoans = []
        this.allDeposits = []
        this.user = user
    }

    get wallet() {
        return this.#wallet
    }

    deposit(deposit) { //recebe instancia
        if (deposit instanceof Deposit) {
            this.#wallet += deposit.value
            this.allDeposits.push(deposit)
        }
    }

    loan(loan) { //recebe instacia
        if (loan instanceof Loan) {
            this.#wallet += loan.value
            this.allLoans.push(loan)
        }
    }

    transfer(transfer) { //recebe instancia
        if (transfer instanceof Transfer) {
            if (transfer.userReceiving.user.email === this.user.email) {
                this.#wallet += transfer.value
                this.allTransfers.push(transfer)
            } else {
                this.#wallet -= transfer.value
                this.allTransfers.push(transfer)
            }
        }
    }
}

module.exports = Account