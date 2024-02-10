const express = require("express")
const checklist = require("./src/routes/checklist")
const history = require("./src/routes/history")

const server = express()

server.use(express.json())

//routes
server.use("/api/checklist", checklist)
server.use("/api/history", history)

server.listen(3000, () => {
    console.log("[ SERVER ] - Servidor Online")
})

module.exports = { server }