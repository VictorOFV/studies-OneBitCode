const DataBase = require('./DataBase')
const Author = require('./entities/Author')
const Book = require('./entities/Book')
const Order = require('./entities/Order')
const Poster = require('./entities/Poster')
const Product = require('./entities/Product')
const User = require('./entities/User')

class App {
    static #database = new DataBase()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
        return author
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
        return book
    }

    createPoster(name, description, price, height, width, inStock) {
        const poster = new Poster(name, description, price, height, width, inStock)
        App.#database.savePoster(poster)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBookFromStock(product.title, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePosterFromStock(product.name, quantity)
            }
        })
    }

    showStorage() {
        App.#database.showStorage()
    }

    addBookToStock(bookName, quantity) {
        App.#database.addBookToStock(bookName, quantity)
    }

    removeBookFromStock(bookName, quantity) {
        App.#database.removeBookFromStock(bookName, quantity)
    }

    addPosterToStock(posterName, quantity) {
        App.#database.addPosterToStock(posterName, quantity)
    }

    removePosterFromStock(posterName, quantity) {
        App.#database.removePosterFromStock(posterName, quantity)
    }

    get users() {
        return App.#database.find("users")
    }

    get books() {
        return App.#database.find("books")
    }

    get posters() {
        return App.#database.find("posters")
    }

    get authors() {
        return App.#database.find("authors")
    }
}

module.exports = App