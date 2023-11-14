class Vehicle {
    constructor(name, type, maxSpeed) {
        this.name = name
        this.type = type
        this.maxSpeed = maxSpeed
    }

    getInfo() {
        console.log(`O veiculo ${this.name}, do tipo ${this.type} pode ir até ${this.maxSpeed} Km/h`)
    }
}

class Car extends Vehicle {
    getInfo() {
        console.log(`O carro ${this.name}, do tipo ${this.type} pode correr até ${this.maxSpeed} Km/h`)
    }
}

class Boat extends Vehicle {
    getInfo() {
        console.log(`O barco ${this.name}, do tipo ${this.type} pode andar até ${this.maxSpeed} Km/h`)
    }
}

class Plane extends Vehicle {
    getInfo() {
        console.log(`O avião ${this.name}, do tipo ${this.type} pode voar até ${this.maxSpeed} Km/h`)
    }
}

const mercedes = new Car("Mercedes Benz GLS 2023", "SUV", 250)
mercedes.getInfo()

const boing = new Plane("Boing 777", "Comercial", 700)
boing.getInfo()

const cruizer = new Boat("Transatlantico", "Cruzeiro", 100)
cruizer.getInfo()

const bike = new Vehicle("Bicicleta KT-500", "Esportiva", 40)
bike.getInfo()

//Basicamente no polimorfismo os metodos podem assumir papeis diferentes, ou seja! voce pode modificar de acordo
//Com a subclasse mantendo sempre o mesmo nome, mas com funcionalidades diferentes!