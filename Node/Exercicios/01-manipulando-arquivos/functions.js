import fs from "node:fs"

function createFile(archive, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(archive, content, "utf-8", (error) => {
            if (error) {
                reject(`Erro ao criar o arquivo ${archive}\n\n`, error.message)
            }

            console.log(`O arquivo ${archive} foi criado com sucesso!`)
            resolve()
        })
    })
}

function readFile(archive) {
    return new Promise((resolve, reject) => {
        fs.readFile(archive, "utf-8", (error, data) => {
            if (error) {
                reject(`Erro ao ler o arquivo ${archive}\n\n`, error.message)
            }

            console.log(data)
            resolve()
        })
    })
}

function updateFile(archive, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(archive, content, "utf-8", (error) => {
            if (error) {
                reject(`Erro ao editar o arquivo ${archive}\n\n`, error.message)
            }

            console.log(`O arquivo ${archive} foi atualizado com sucesso!`)
            resolve()
        })
    })
}

function deleteFile(archive) {
    return new Promise((resolve, reject) => {
        fs.unlink(archive, (error) => {
            if (error) {
                reject(`Erro ao deletar o arquivo ${archive}`)
            }
    
            console.log(`O arquivo ${archive} foi deletado com sucesso!`)
            resolve()
        })
    })
}

export { createFile, readFile, updateFile, deleteFile }