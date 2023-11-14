function register(element){
    const username = element.children[0].children.username
    const password = element.children[1].children.password
    const confirmPassWord = element.children[2].children.confirmPassword

    if(password.value === confirmPassWord.value){
        alert(`Usuário ${username.value} cadastrado com sucesso!`)
        username.value = ""
        password.value = ""
        confirmPassWord.value = ""
    }else{
        alert("As senhas não são iguais")
    }
}