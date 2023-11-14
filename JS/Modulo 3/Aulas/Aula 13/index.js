function isDarkTheme(){
    document.body.style.color = "white"
    document.body.style.backgroundColor = "black"
}

function isLightTheme(){ //Alterar os elementos via DOM
    document.body.style.color = "black"
    document.body.style.backgroundColor = "white"
}

function alternateTheme(){ //Alterar os elementos via CSS
    document.body.classList.toggle("isDarkTheme")
    document.body.classList.toggle("isLightTheme")
}

const buttonDarkTheme = document.getElementById("dark-theme")
buttonDarkTheme.addEventListener("click", isDarkTheme)

const buttonLightTheme = document.getElementById("light-theme")
buttonLightTheme.addEventListener("click", isLightTheme)

const buttonAlternateTheme = document.getElementById("alternate-theme")
buttonAlternateTheme.addEventListener("click", alternateTheme)