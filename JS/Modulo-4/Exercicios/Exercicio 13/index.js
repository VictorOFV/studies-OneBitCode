import { calculate } from "./Modules/calculater.js"
import { clipboard } from "./Modules/clipboard.js"
import { themeSwitch } from "./Modules/themeSwitch.js"
import { clear } from "./Modules/clear.js"
import { keyPress, charKey } from "./Modules/keys.js"

document.querySelectorAll(".charKey").forEach(charKey)
document.getElementById("input").addEventListener("keypress", keyPress)
document.getElementById("clear").addEventListener('click', clear)
document.getElementById("equal").addEventListener('click', calculate)
document.getElementById("copyToClipboard").addEventListener('click', clipboard)
document.getElementById("themeSwitch").addEventListener('click', themeSwitch)