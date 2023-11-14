const User =  require("./User")
const friends = [
    {
        name: "Rebeca",
        age: 20
    },
    {
        name: "Fabio",
        age: 18
    }
]

const user1 = new User("Victor Manoel", 1, "https://tenor.com/view/rotating-skull-gif-24524852", 21, "2002-08-20", friends)

user1.addMoney(2000)
user1.addVip()
user1.age = user1.age + 1
console.log(user1)
// ---------------------------------------------------------------------------------------------------//

const user2 = new User("Joao", 2, "http://aprimadodomaxeminha.jpg", 24, "1998-10-20", friends)
user2.addMoney(50)
user2.addAvatar("https://tenor.com/view/rotating-skull-gif-24524852")
console.log(user2)