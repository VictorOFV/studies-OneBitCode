const Comment = require("./Comment")

class Post {
    constructor(title, content, author){
        this.title = title
        this.content = content
        this.createdAt = new Date()
        this.comments = []
        this.author = author
    }

    addComments(name, comment){
        this.comments.push(new Comment(name, comment))
    }
}

module.exports = Post