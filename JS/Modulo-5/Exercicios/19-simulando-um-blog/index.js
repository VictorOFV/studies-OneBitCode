const Author = require("./assets/Author")

const author1 = new Author("Jorge Luiz", 1, "http://PrimaDoMaxEMinha.jpg") // Criando um autor

const post = author1.createPost("Um dia na floresta...", "Uma vez eu vi um bixo!", "2024-09-25") // Criando o primeiro post
post.addComments("Lucas Vinicus", "Oloco Mano! eu fiquei com medo!") // Comentario do Post 1
post.addComments("Victor Manoel", "Ave maria doido!") // Comentario do Post 1

const post2 = author1.createPost("Tste", "A prima do max e minha") // Criando o segundo post
post2.addComments("Max", "Realmente a minha prima e tua") // comentario do post 2

console.log(post)
console.log(post2)

console.log(author1)

const author2 = new Author("Lucas", 2, "link")//Criando um segundo autor
author2.createPost("Eita Lasqueira!", "IhrruuuUU!") // Criando o primeiro post do segundo autor
console.log(author2)
