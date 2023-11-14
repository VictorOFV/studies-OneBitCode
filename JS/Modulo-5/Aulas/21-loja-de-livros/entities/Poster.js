const Product = require("./Product");

class Poster extends Product {
   constructor(name, description, price, height, width, inStock = 0){
    super(`Poster: ${name}`, description, price, inStock)
    this.height = height
    this.width = width
   } 
}

module.exports = Poster