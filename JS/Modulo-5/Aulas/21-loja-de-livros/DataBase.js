class DataBase {
    #database = {
        users: [],
        books: [],
        posters: [],
        authors: [],
        orders: [],
        products: []
    }

    find(key) {
        return this.#database[key]
    }

    saveAuthor(author) {
        this.#database.authors.push(author)
    }

    #findBookByName(bookName) {
        return this.#database.books.find(book => book.title === bookName)
    }

    saveBook(book) {
        const bookExist = this.#findBookByName(book.title)
        if (!bookExist) {
            this.#database.books.push(book)
        }else{
            throw new Error(`Esse livro já existe no estoque`)
        }
    }

    addBookToStock(bookName, quantity){
        const bookExist = this.#findBookByName(bookName)
        if(bookExist){
            bookExist.addToStock(quantity)
        }else{
            throw new Error("Esse livro não existe!")
        }
    }

    removeBookFromStock(bookName, quantity){
        const bookExist = this.#findBookByName(bookName)
        if(bookExist){
            bookExist.removeToStock(quantity)
        }else{
            throw new Error("Esse livro não existe!")
        }
    }

    #findPosterByName(posterName) {
        return this.#database.posters.find(poster => poster.name === posterName)
    }

    savePoster(poster) {
        const posterExist = this.#findPosterByName(poster.name)
        if (!posterExist) {
            this.#database.posters.push(poster)
        }else{
            throw new Error("Esse poster já existe no estoque!")
        }
    }

    addPosterToStock(posterName, quantity){
        const posterExist = this.#findPosterByName(posterName)
        if(posterExist){
            posterExist.addToStock(quantity)
        }else {
            throw new Error("Esse poster não existe")
        }
    }

    removePosterFromStock(posterName, quantity){
        const posterExist = this.#findPosterByName(posterName)
        if(posterExist){
            posterExist.removeToStock(quantity)
        }else{
            throw new Error("Esse poster não existe")
        }
    }

    saveUser(user){
        const userExist = this.#database.users.find(userFind => user.email === userFind.email)
        if(!userExist){
            this.#database.users.push(user)
        }else{
            throw new Error("Esse usuário já existe")
        }
    }

    saveOrder(order){
        this.#database.orders.push(order)
    }

    showStorage(){
        console.table(this.#database.authors)
        console.table(this.#database.books)
        console.table(this.#database.users)
        console.table(this.#database.posters)
        console.table(this.#database.orders.map(order => order.data))
    }
}

module.exports = DataBase