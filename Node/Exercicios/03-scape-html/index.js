const fs = require("node:fs")
const readline = require("node:readline")
const path = require("node:path")

function scapeHtmlSpecialCharacters(text) {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;"
            case ">":
                return "&gt;"
            case "&":
                return "&amp"
            default:
                return text
        }
    })
}

function scapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        const fileContent = fs.readFileSync(inputFilePath, "utf-8")
        const scapedCotnent = scapeHtmlSpecialCharacters(fileContent)
        fs.writeFileSync(outputFilePath, scapedCotnent, "utf-8")
        console.log(`Arquivo escapado com sucesso: ${outputFilePath}`)
    } catch (error) {
        console.log("Erro: ", error)
        process.exit(1)
    }
}

function askFilePath(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
        
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
        })
    })
}

async function userInteraction() {
    let inputPath = process.argv[2]

    if(!inputPath) {
        inputPath = await askFilePath("Informe o caminho de entrada: ")
    }

    inputPath = path.resolve(inputPath)

    const defaultName = `escaped_${path.basename(inputPath)}.txt`
    const answer = await askFilePath(`Informe o caminho do arquivo de sída (padrão: ${defaultName}): `)
    let outputPath = answer.length === 0 ? defaultName : answer
    outputPath = path.resolve(outputPath)

    scapeHtmlFile(inputPath, outputPath)
}

function run() {
    if(process.argv.length >= 4) {
        scapeHtmlFile(
            path.resolve(process.argv[2]),
            path.resolve(process.argv[3])
        )
    } else {
        console.log("---------------------")
        console.log("HTML Tag Escaper v1.0")
        console.log("---------------------\n")
        console.log("Argumentos não informados! Por favor, informe os caminhos dos arquivos para realizar o escape.")
        userInteraction()
    }
} 

run()