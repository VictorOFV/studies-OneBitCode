const Address = require("./Address")

class User {
    constructor(name, street, number, neighborhood, zip, city, state){
        this.name = name
        this.address = new Address(street, number, neighborhood, zip, city, state)
    }
}

module.exports = User