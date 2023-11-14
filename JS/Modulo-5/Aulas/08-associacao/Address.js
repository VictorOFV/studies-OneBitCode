class Address {
    constructor(street, number, neighborhood, zip, city, state){
        this.street = street
        this.number = number
        this.neighborhood = neighborhood
        this.zip = zip
        this.city = city
        this.state = state
    }

    fullAddress(){
        return `${this.street}, ${this.number}, ${this.neighborhood}, ${this.zip}, ${this.city}, ${this.state}`
    }
}

module.exports = Address