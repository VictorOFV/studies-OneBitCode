const {Apartament, Property} = require("./teste")

const property = new Property(2000, 300000) //Cria uma nova instacia de property
console.log(property) // retorna a classe property
console.log(property.getPricePerSquareMeter()) //retorna o valor do metro quadrado da property

const apartament = new Apartament(1500, 100000, "402", "Jorge Luis") // cria uma nova instacia de apartament
console.log(apartament) // retornar a classe apartament
console.log(apartament.getFloor()) // retorna o andar do apartamento
console.log(apartament.getPricePerSquareMeter()) //retorna o valor do metro quadrado do apartamento e o mesmo metodo da classe property herdada