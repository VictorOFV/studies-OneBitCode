let arrayStrings: [string, string, string] // isso aqui e uma tupla
arrayStrings = ["teste", "Brazil", "Victor"]

let arr: [boolean, number, string, object] // outro exemplo de tupla
arr = [false, 12, "Nao sei", { brasil: "BRASIL" }]

let arrNumbers: [number, number] // exemplo de tuplas somente com numeros
arrNumbers = [10, 20]

// O TypeScript possui uma análise especial sobre arrays que contêm múltiplos tipos,
// e quando a ordem em que eles estão indexados é importante. Esses são chamados de tuplas. 
// Pense nelas como uma forma para conectar dados, mas com menos sintaxe que os objetos.