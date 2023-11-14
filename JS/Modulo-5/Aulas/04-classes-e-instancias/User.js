class User {
    constructor(name, id, avatar, age, birthday, friends){
        this.name = name
        this.id = id
        this.avatar = avatar
        this.age = age
        this.birthday = birthday
        this.friends = friends
        this.money = 0
        this.vip = false
    }

    addMoney(money){
        this.money += money
    }
    addVip(){
        this.vip = this.vip === false ? true : false
    }
    addAvatar(avatar){
        this.avatar = avatar
    }
}

module.exports = User