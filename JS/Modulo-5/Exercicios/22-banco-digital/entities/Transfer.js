class Transfer {
    constructor(userSending, userReceiving, value) {
        this.userSending = userSending
        this.userReceiving = userReceiving
        this.value = value
        this.createdAt = new Date()
    }
}

module.exports = Transfer