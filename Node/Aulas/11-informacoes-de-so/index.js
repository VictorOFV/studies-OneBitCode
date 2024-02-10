const os = require("node:os")

cpus = os.cpus()
console.log(cpus[0])

const userInfo = os.userInfo()
console.log(userInfo)

const plataform = os.platform()
console.log(plataform)

const network = os.networkInterfaces()
console.log(network)

const arch = os.arch()
console.log(arch)