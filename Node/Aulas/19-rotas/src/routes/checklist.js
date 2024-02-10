const express = require("express")
const router = express.Router()

const checklists = []

router.get("/", (request, response) => {
    response.status(200).json({ checklists })
})

router.post("/", validateTaks, (request, response) => {
    const { task } = request.body
    checklists.push(task)
    response.status(201).json(task)
})

router.get("/:name", (request, response) => {
    const { name } = request.params
    const { task } = request.body
    const checklist = checklists.find(checklist => checklist.name.toLowerCase().trim() === name.toLowerCase().trim())
    if (!checklist) return response.status(404).json({ message: "Checklist não encontrado!" })
    response.status(200).json(checklist)
})

router.put("/:name", validateTaks, (request, response) => {
    const { name } = request.params
    const { task } = request.body

    const checklist = checklists.find((checklist, index) => {
        if (checklist.name === name) {
            checklists.splice(index, 1, task)
            return task
        }
    })

    if (!checklist) return response.status(404).json({ message: "Checklist não encontrado!" })

    response.status(204).json()
})

router.delete("/:name", (request, response) => {
    const { name } = request.params

    const checklist = checklists.find((checklist, index) => {
        if (checklist.name === name) {
            checklists.splice(index, 1)
            return checklist
        }
    })

    if (!checklist) return response.status(404).json({ message: "Checklist não encontrado!" })

    response.status(204).json()
})

function validateTaks(request, response, next) {
    const { task } = request.body

    if (!task || typeof (task) !== "object") {
        return response.status(400).json({ message: "Sintaxe Invalida" })
    }

    next()
}

module.exports = router