class Order {
    #items
    #user
    #total

    constructor(items, user) {
        items.forEach(({ product, quantity }) => {
            if (quantity > product.inStock) {
                throw new Error(`Quantidade do produto ${product.name} insuficente! quantidade disponível ${product.inStock}`)
            }
        })

        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, { product, quantity }) => sum + (product.price * quantity), 0)
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}

module.exports = Order