const fs = require("node:fs")

fs.rename("archive.txt", "newArchive.txt", (error) => {
    if (error) {
        console.log("Erro ao renomear arquivo: ", error.message)
        return
    }

    console.log("Arquivo renomeado com sucesso!")
})

// try { forma sincrona
//     fs.renameSync("archive.txt", "newArchive.txt")
//     console.log("Nome do arquivo modificado com sucesso!")
// } catch (error) {
//     console.log("Houve um erro!", error.message)
// }