const express = require("express")

const server = express()

server.use(express.json())

server.get("/", userAuth, (request, response) => { // função get da rota principal
    const { text } = request.body
    response.status(200).json({ message: text })
})

server.get("/numbers", (request, response) => { // função get da rota numbers
    response.status(200).json({ numbers: [1, 2, 3, 4, 5], done: true })
})

server.listen(3000, () => { // Aqui o servidor fica escutando a porta
    console.log("[ SERVER ] - Servidor Iniciado.")
})

function userAuth(request, response, next) { // middleware => responsavel por fazer verificação antes de passar para a função principal
    const { user } = request.body

    if (user !== "Lucas" || !user) {
        return response.status(203).json({ message: "Não Autorizado" })
    }

    next()
}