const { askQuestion, createNote, deleteNote, listNotes, readNote, notesFolderCreate } = require("./functions")

async function continueInteraction() {
    const continueInt = await askQuestion("Você deseja continuar a usar a aplicação? (S/N): ")

    if (continueInt.toLowerCase() === "s") {
        userInteraction()
    } else if (continueInt.toLowerCase() === "n") {
        console.log("Encerrando...")
        process.exit(0)
    } else {
        console.clear()
        console.log("Opção invalida!")
        continueInteraction()
    }
}

async function userInteraction() {
    notesFolderCreate()

    console.clear()
    console.log("====================================")
    console.log("Gerenciamento de Notas via CLI v1.2")
    console.log("====================================\n")

    const menu = await askQuestion("1 - Criar Nota\n2 - Listar Notas\n3 - Ler Nota\n4 - Excluir Nota\n5 - Sair\nEscolha uma opção: ")

    switch (menu) {
        case "1": {
            const title = await askQuestion("Título da nota: ")
            const text = await askQuestion("Conteúdo da nota:\n")
            createNote(title, text)
            await continueInteraction()
            break;
        }
        case "2":
            listNotes()
            await continueInteraction()
            break
        case "3": {
            listNotes()
            const title = await askQuestion("Título da nota que você deseja ler (exemplo: '3'): ")
            readNote(title)
            await continueInteraction()
            break
        }
        case "4": {
            listNotes()
            const title = await askQuestion("Título da nota que você deseja excluir (exemplo: '2'): ")
            deleteNote(title)
            await continueInteraction()
            break
        }
        case "5": {
            console.log("Saindo do programa...")
            process.exit(0)
        }
        default:
            console.log("Opção inválida!")
            userInteraction()
    }
}

userInteraction()