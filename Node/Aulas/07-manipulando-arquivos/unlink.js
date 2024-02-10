const fs = require("node:fs")

fs.unlink("newArchive.txt", (error) => {
    if(error) {
        console.log("Erro ao excluir o arquivo", error.message)
        return 
    }
    
    console.log("Arquivo excluido com sucesso!")
})

// try { // funcao sincrono
//     fs.unlinkSync("newArchive.txt")
//     console.log("Arquivo excluido com sucesso")
// } catch (error) {
//     console.log("Erro ao excluir arquivo: ", error)
// }