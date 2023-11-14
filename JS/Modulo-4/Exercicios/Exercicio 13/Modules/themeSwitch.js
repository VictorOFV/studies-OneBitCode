function themeSwitch(event) {
    const button = event.currentTarget
    const main = document.querySelector('main')
    const root = document.querySelector(":root")

    if (main.dataset.theme === "darkMode") {
        button.innerText = "Dark Mode"
        root.style.setProperty("--bg-color", "#f1f6f9")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--primary-color", "#0ba446")
        main.dataset.theme = "whiteMode"
    } else {
        button.innerText = "White Mode"
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--font-color", "#f1f6f9")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--primary-color", "#00ff62")
        main.dataset.theme = "darkMode"
    }
}

export { themeSwitch }