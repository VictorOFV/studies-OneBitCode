class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class Apartament extends Property {
    constructor(area, price, number, ownerName){
        super(area, price)
        this.number = number
        this.ownerName = ownerName
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}

module.exports = {Property, Apartament}