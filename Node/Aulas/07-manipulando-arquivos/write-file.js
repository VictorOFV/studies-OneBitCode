const fs = require("node:fs")

const content = "A prima do max sempre foi minha!!! \n\nO cara ainda reclama quando falo que vou entrar para a familia dele."

fs.writeFile("archive.txt", content, "utf-8", (error) => {
    if(error) {
        console.log("Erro ao criar arquivo: ", error.message)
        return
    }

    console.log("Arquivo criado com sucesso!")
})

// try { Forma sincrona
//     fs.writeFileSync("./archive.txt", "Ola mundo!!", "utf-8")
//     console.log("Arquivo criado com sucesso!")
// } catch (error) {
//     console.log("Error", error.message)
// }