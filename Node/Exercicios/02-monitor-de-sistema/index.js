const { getInfoOs, writeLogs } = require("./functions")

async function saveLogs({ MemPct, archOs, cpu, freeMemory, nameOs, system, totalMemory, upTimeOs }) {
    await writeLogs(`[ LOG ]: ${new Date().toLocaleTimeString()}\nNome do Sistema: ${nameOs}\nSistema: ${system}\nProcessador: ${cpu}\nArquitetura: ${archOs}\nAtividade do Sistema: ${upTimeOs}\nMemoria: ${freeMemory} GB / ${totalMemory} GB - ${MemPct}%\n___________________________________\n\n`)
}

function consolePrint({ MemPct, archOs, cpu, freeMemory, nameOs, system, totalMemory, upTimeOs }) {
    console.clear()
    console.log(`[ LOG ]: ${new Date().toLocaleTimeString()}`)
    console.log(`Nome do Sistema: ${nameOs}`)
    console.log(`Sistema: ${system}`)
    console.log(`Processador: ${cpu}`)
    console.log(`Arquitetura: ${archOs}`)
    console.log(`Atividade do Sistema: ${upTimeOs}`)
    console.log(`Memoria: ${freeMemory} GB / ${totalMemory} GB - ${MemPct}%`)
}

setInterval(async () => {
    const info = getInfoOs()
    consolePrint(info)
    await saveLogs(info)
}, 1000) 