const path = require("node:path")

const fullPath = path.join("src", "app", "home") // Combina segmentos de caminho em um único caminho.
console.log(fullPath)

const relativePath = "../images/image.png"
const absolutePath = path.resolve(relativePath) // Resolve um caminho absoluto a partir de segmentos de caminho dados.
console.log(absolutePath)

const baseName = path.basename(absolutePath) // Retorna o nome do arquivo ou diretório de um caminho.
console.log(baseName) 

const dirName = path.dirname(absolutePath) // Retorna o diretório pai de um caminho.
console.log(dirName)

const extensionName = path.extname(absolutePath) // Retorna a extensão do arquivo de um caminho.
console.log(extensionName)