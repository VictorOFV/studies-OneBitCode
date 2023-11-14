function register(event){
    const form = event.target.form
    const username = form.children[0].children.username
    const password = form.children[1].children.password
    const confirmPassWord = form.children[2].children.confirmPassword

    if(password.value === confirmPassWord.value){
        alert(`Usuário ${username.value} cadastrado com sucesso!`)
        username.value = ""
        password.value = ""
        confirmPassWord.value = ""
    }else{
        alert("As senhas não são iguais")
    }
}

function removeEvent(){
    buttonRegister.removeEventListener('click', register)
    alert("Evento removido com sucesso!")
}

const buttonRegister = document.getElementById("button-register");
buttonRegister.addEventListener('click', register)

const buttonEventRemove = document.getElementById("buttonEventRemove")
buttonEventRemove.addEventListener("click", removeEvent)