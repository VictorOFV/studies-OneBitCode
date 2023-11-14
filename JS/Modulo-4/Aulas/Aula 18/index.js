import { inLine } from "./export-inline.js"; // importando em linha sem ser default
import euConsigoSim from "./export-inline.js" // importaando em linha sendo default! voce consegue passar qualquer nome como paramentro
import deusEFiel, { nonInline } from "./export-non-inline.js"; // importando em nao linha, com default e sem default

console.log(inLine())
console.log(euConsigoSim())
console.log(deusEFiel())
console.log(nonInline())
