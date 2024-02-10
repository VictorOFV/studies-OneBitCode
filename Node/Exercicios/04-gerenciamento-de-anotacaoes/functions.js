const fs = require("node:fs")
const readline = require("node:readline")
const path = require("node:path")

function createNote(title, text) {
    try {
        const pathNote = path.resolve("notes", `${title}.txt`)

        fs.writeFileSync(pathNote, text, "utf-8")
        console.log(`A nota ${title} foi criada com sucesso na pasta: ${pathNote}`)
    } catch (error) {
        console.log(`Houve um erro ao criar o arquivo ${title} `, error)
        process.exit(1)
    }
}

function listNotes() {
    try {
        const pathNotes = path.resolve("notes")
        const data = fs.readdirSync(pathNotes)

        if (data.length === 0) {
            console.log("Não existe nenhuma nota!")
            return
        }

        console.log("Lista de Notas Existentes:\n")
        data.forEach((value, index) => {
            console.log(`==> [${index + 1}] - ${value.replace(".txt", "")}`)
        })

    } catch (error) {
        console.log("Houve um erro ao listar as notas ", error)
        process.exit(1)
    }
}

function readNote(index) {
    try {
        const noteName = getNoteForIndex(index)
        const pathNote = path.resolve("notes", `${noteName}`)
        const noteExist = fs.existsSync(pathNote)

        if (!noteExist) {
            console.log("Essa nota não existe!")
            return
        }

        const data = fs.readFileSync(pathNote, "utf-8")
        console.log(`Descrição da Nota ${noteName}:\n\n${data}\n`)
    } catch (error) {
        console.log(`Houve um erro ao ler o arquivo ${noteName}`, error)
        process.exit(1)
    }
}

function deleteNote(index) {
    try {
        const noteName = getNoteForIndex(index)
        const pathNote = path.resolve(`notes/${noteName}`)
        const noteExist = fs.existsSync(pathNote)

        if (!noteExist) {
            console.log("Essa nota não existe!")
            return
        }

        fs.unlinkSync(pathNote)
        console.log(`A nota ${noteName} foi deletada com sucesso!`)
    } catch (error) {
        console.log(`Houve um erro ao deletar a nota ${noteName} `, error)
        process.exit(1)
    }
}

function askQuestion(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
        })
    })
}

function getNoteForIndex(index) {
    const pathNotes = path.resolve("notes")
    const notes = fs.readdirSync(pathNotes, "utf-8")
    const note = notes[index - 1]

    if(!notes.length === 0 || !note) return null

    return note
}

function notesFolderCreate() {
    const pathFolder = path.resolve("notes")
    fs.mkdirSync(pathFolder, { recursive: true })
}

module.exports = { askQuestion, createNote, deleteNote, listNotes, readNote, notesFolderCreate }