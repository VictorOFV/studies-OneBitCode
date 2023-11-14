const form = document.querySelector("form")

function validateEmail(email) {
    if (!email.match(/^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/)) {
        const error = new Error("Email invalido! exemplo de email valido: xx@xx.xx")
        throw error
    }
}

function validatePassword(password) {
    if (!password.match(/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)) {
        const error = new Error("Senha invalida, a senha deve conter pelo menos 1 letra minuscula, 1 letra maiuscula, 1 numero, 1 caracter especial e ter pelo menos 8 digitos")
        throw error
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const name = document.getElementById("name")

    try {

        validateEmail(email.value)
        validatePassword(password.value)
        name.value = ""
        email.value = ""
        password.value = ""
        alert("Cadastro realizado com sucesso!")

    } catch (e) {
        alert(`Erro: ${e.message}`)
    }
})