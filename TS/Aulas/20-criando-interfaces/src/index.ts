interface PersonInterface {
    name: string
    age: number
    friends: string[]
    addFriends: (name: string) => void
}

interface StaffInterface extends PersonInterface{
    level: number
    levelName: string
}

class Person implements PersonInterface{
    name: string
    age: number
    friends: string[]

    constructor(name: string, age:number, friends: string[]) {
        this.name = name
        this.age = age
        this.friends = friends
    }

    addFriends(name: string) {

    }
}

class Staff extends Person implements StaffInterface {
    level: number
    levelName: string

    constructor(name: string, age: number, friends: string[]) {
        super(name, age, friends)
        this.level = 0
        this.levelName = ""
    }

    addLevel(level:number) {
        this.level = level
    }
}