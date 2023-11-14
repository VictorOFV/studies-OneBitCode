import User from "./User.js";
import Product from "./Product.js";

const user1 = new User("Victor Manoel", "victormanoellopesporto@gmail.com", "1234")
const user2 = new User("Rafael Lobato", "rafaellobato@gmail.com", "40028922")

console.log(user1)
console.log(user2)

user1.login("victormanoellopesporto@gmail.com", "1234")
user2.login("rafaellobato@gmail.com", "400")

const product1 = new Product("Camisas do Dragon Ball", "As Melhores camisas do dragon ball", 35.50)
const product2 = new Product("Canecas do Harry Potter", "Canecas de Porcelana", 20)

console.log(product1)
console.log(product2)

product1.addToStock(20) // Adicionando stock no produto 1
product1.addToStock(10) // Adicionando stock no produto 1
product2.addToStock(80) // Adicionando stock no produto 2

console.log(product1)
console.log(product2)

console.log(product1.calculateDiscount(20)) // Calculador o desconto do produto 1
console.log(product2.calculateDiscount(5)) // Calculador o desconto do produto 1