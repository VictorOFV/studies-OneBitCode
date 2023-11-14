const Installment = require("./Installment")

class Loan {
    constructor(value, numberOfInstallments) {
        this.createdAt = new Date()
        this.value = value
        this.installments = []
        for (let i = 1; i <= numberOfInstallments; i++) {
            this.installments.push(new Installment((value * Loan.#fees) / numberOfInstallments, i))
        }
    }

    static #fees = 1.05

    static get fees() {
        return this.#fees
    }

    static set fees(newValue) {
        this.#fees = 1 + (newValue / 100)
    }
}

module.exports = Loan