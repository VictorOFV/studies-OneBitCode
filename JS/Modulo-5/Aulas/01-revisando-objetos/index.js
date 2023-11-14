function User(name, id, avatar, age, birthday, friends){
    this.name = name
    this.id = id
    this.avatar = avatar
    this.age = age
    this.birthday = birthday
    this.money = 0
    this.friends = friends
    this.addMoney = (money) => {
        this.money += money
    }
}

const friends = [
    {
        name: "Lucas",
        age: 19
    },
    {
        name: "Rebeca",
        age: 21
    }
]

const user1 = new User("Jorge Gustavo", 1, "https://tenor.com/view/rotating-skull-gif-24524852", 21, "2002-08-22", friends)
console.log(user1)
//-------------------------------------------------------------------------------------------------------------//
const user2 = new User("Jessica Ribeiro", 2, "https://tenor.com/view/die-hachikuji-monogatari-punching-anime-gif-26529250", 25, "1998-10-20", friends)
console.log(user2)
//-------------------------------------------------------------------------------------------------------------//

//O operador (new) serve para dizer a função contrutora que aquilo e um novo objeto e retorna o objeto em si

user1.addMoney(150)
user2.addMoney(600)
user2.addMoney(400)

console.table({user1, user2})