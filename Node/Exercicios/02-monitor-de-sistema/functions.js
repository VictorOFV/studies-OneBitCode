const os = require("node:os")
const fs = require("node:fs")
const path = require("node:path")
const humanizeDuration = require("humanize-duration");

function writeLogs(text) {
    return new Promise((resolve, reject) => {
        const pathFolder = path.resolve('./', 'logs')

        if(!fs.existsSync(pathFolder)) {
            fs.mkdirSync(pathFolder)
        }

        const pathArchive = path.resolve(pathFolder, "logs.txt")

        fs.appendFile(pathArchive, text, "utf-8", (error) => {
            if (error) {
                console.log("Houve um erro ao escrever a log", error.message)
                resolve()
            }
        })

        resolve()
    })
}

function getInfoOs() {
    const nameOs = os.hostname()
    const archOs = os.arch()
    const system = os.platform()
    const upTimeOs = humanizeDuration(os.uptime() * 1000, { language: "pt", maxDecimalPoints: 0 })
    const cpu = os.cpus()[0].model
    const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
    const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(2)
    const usageMemory = os.totalmem() - os.freemem()
    const MemPct = ((usageMemory / os.totalmem) * 100).toFixed(1)

    return {
        nameOs,
        archOs,
        upTimeOs,
        MemPct,
        freeMemory,
        totalMemory,
        cpu,
        system
    }
}

module.exports = { writeLogs, getInfoOs }