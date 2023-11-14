const App = require('./App')
const app = new App()

const author = app.authors

app.createAuthor("Victor Manoel", "Brasileiro", "...")
app.createAuthor("Akira Toryama", "Japonês", "...")
app.createAuthor("J.K Rowling", "Britânica", "...")

const user = app.users

app.createUser("Luiza da Silva", "luizadasilva@gmail.com", "1234")
app.createUser("Thaina Fernandes", "thainafernandes@gmail.com", "4321")

const book = app.books

app.createBook("Harry Potter", "...", ["Ação", "Aventura", "Fantasia"], 500, author[2], "livro do harry potter", 45.99, 100)
app.createBook("Dragon Ball: Super", "...", ["Ação", "Aventura", "Manga"], 120, author[1], "Manga de DragoN Ball", 22.50, 200)
app.createBook("Incrivel Mundo do Vitu", "...", ["Pescotapa", "Horror"], 600, author[0], "livro do vitu", 129.99, 30)

app.addBookToStock("Incrivel Mundo do Vitu", 20) // Adicionando 20 unidades no estoque, ficando com 50 unidade no total!
app.removeBookFromStock("Incrivel Mundo do Vitu", 10) // Removendo 10 unidades no estoque, ficando com 40 unidades no total!

const poster = app.posters

app.createPoster("Senhor do Aneis", "Smigou do senhor dos aneis", 70.45, 60, 80, 2)
app.createPoster("Rias Gremory", "poster em tamanho real da rias gremory de DXD", 270, 172, 60, 45)

app.addPosterToStock("Poster: Senhor do Aneis", 3) // Adicionando 3 unidades de posters no estoque, ficando com 5 unidade no total
app.removePosterFromStock("Poster: Senhor do Aneis", 1) // removendo 1 unidade de poster no estoque, ficando com 4 unidades no total

app.showStorage()

const items = [
    {
        product: book[1],
        quantity: 5
    },
    {
        product: book[2],
        quantity: 1
    },
    {
        product: poster[1],
        quantity: 2
    }
]
app.createOrder(items, user[1])
app.showStorage()