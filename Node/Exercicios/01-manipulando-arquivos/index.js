import { createFile, deleteFile, readFile, updateFile } from "./functions.js"

async function execute() {
    await createFile("./meuarquivo.txt", "Eu realmente quero me tornar um programador, de verdade!")
    await readFile("./meuarquivo.txt")
    await updateFile("./meuarquivo.txt", "Eu vou conseguir, eu juro!")
    await readFile("./meuarquivo.txt")
    await deleteFile("./meuarquivo.txt")
}

execute()