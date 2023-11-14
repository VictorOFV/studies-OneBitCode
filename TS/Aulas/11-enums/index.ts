enum Roles {
    USER,
    SUPPORT,
    MODERATOR,
    ADMINISTRATOR,
    ADMINISTRATOR_MASTER,
    FOUNDER
}

const user = {
    name: "Roberto",
    id: 1,
    role: 2
}

if (user.role >= Roles.MODERATOR) {
    console.log("Usuario tem permisao")
} else {
    console.log("Usuario nao tem permissao")
}

//Enums ajudam a melhorar a legibilidade, manutenção e segurança do código. 
//Com uma enumeração, você pode evitar erros de digitação, 
//garantir a consistência dos valores utilizados e facilitar a compreensão do código.