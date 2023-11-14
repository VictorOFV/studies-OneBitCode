// caso 1 de destruturação

const person = {
    name: "Jeniffer Lawrence",
    age: "33",
    boyFriend: "Victor Manoel",
    friends: ["Jason Momoa", "Dominic Toreto", "Brian O'Conner"]
}

const {name, age, boyFriend, friends} = person

console.log(`Nome: ${name}, Idade: ${age}, Namorado: ${boyFriend}`)

const [friend1, friend2, firend3] = friends

console.log(`Amigo 1: ${friend1}, Amigo 2: ${friend2}, Amigo 3: ${firend3}`)

// Caso 2 de destruturação

function userCreate({name, age, birthDay, bestFriend}){
    const id = Math.floor(Math.random() * 10)

    return{
        name,
        age,
        id,
        birthDay,
        bestFriend
    }
}

const userData = {
    name: "Lucas Goldinho",
    age: "22",
    birthDay: "20/08/2001",
    bestFriend: "Jorge Cliton"
}

console.log(userCreate(userData))