const http = require("node:http")

const server = http.createServer((request, response) => {
    response.statusCode = 200
    console.log(request.url)
    response.end("teste")
})

server.listen(3000, () => {
    console.log("[ Server ] - Servidor Online")
}) // aqui ligamos o nosso servidor http totalmente nativo do node

server.addListener("request", (req, res) => {
    console.log(`[ SERVER ] - Houve um request`)
})