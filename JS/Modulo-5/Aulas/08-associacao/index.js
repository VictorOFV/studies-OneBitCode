const User = require("./User")

const user1 = new User("Victor Manoel", "Ponta Negra", 6875, "Três Marias", "76812-498", "Porto Velho", "RO")

console.log(user1)
console.log(user1.address.fullAddress())