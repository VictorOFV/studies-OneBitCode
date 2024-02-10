const fs = require("node:fs")

fs.readFile("archive.txt", "utf-8", (error, data) => {
    if(error) {
        console.log("Houve um error ao ler o arquivo", error.message)
        return
    }

    console.log(data)
})

// try { Forma sincrona
//     const data = fs.readFileSync("archive.txt", "utf-8")
//     console.log(data)
// } catch (error) {
//     console.log("Aconteceu um erro: ", error.message)
// }