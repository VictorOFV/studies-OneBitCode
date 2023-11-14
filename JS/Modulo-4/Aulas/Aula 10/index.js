const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}

//caso 1 de encadeamento opcional
console.log(user.friends?.phone?.number)

//caso 2 de encadamento opcional

console.log(user.friends?.[7].phone?.number)

//basicamente o encaamento opcional nao da erro no codigo caso a chave acessada nao exista. retorna undefined e ai podemos fazer o tratamento
