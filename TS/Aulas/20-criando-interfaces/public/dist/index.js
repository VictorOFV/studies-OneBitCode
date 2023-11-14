"use strict";
class Person {
    constructor(name, age, friends) {
        this.name = name;
        this.age = age;
        this.friends = friends;
    }
    addFriends(name) {
    }
}
class Staff extends Person {
    constructor(name, age, friends) {
        super(name, age, friends);
        this.level = 0;
        this.levelName = "";
    }
    addLevel(level) {
        this.level = level;
    }
}
