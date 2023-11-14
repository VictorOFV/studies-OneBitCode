function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (!age) {
            reject(new Error("Argumento de idade não encontrado"))
        }
        if (isNaN(age)) {
            reject(new Error("O argumento não é um numero"))
        }

        resolve(age > 18)
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (!birthday) {
            reject(new Error("Argumento de data não encontrado!"))
        } else {
            const dateBirthday = new Date(birthday).getFullYear()
            const dateNow = new Date().getFullYear()
            resolve(dateNow - dateBirthday)
        }
    })
}

getAge("2010-08-20").then((result) => {
    checkAge(result).then((isOve18) => {
        if (isOve18) {
            console.log("Maior de idade")
        } else {
            console.log("Menor de idade")
        }
    }).catch((e) => {
        console.log(e.message)
    })
}).catch((e) => {
    console.log(e.message)
})