class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(amount){
        this.inStock += amount
    }

    calculateDiscount(discount){
        const value = (discount * this.price) / 100
        return `O valor com o desconto do produto ${this.name} fica em R$${this.price - value}`
    }
}

export default Product