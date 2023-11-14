const Post = require("./Post")

class Author {
    constructor(name, id, image) {
        this.name = name
        this.id = id
        this.image = image
        this.posts = []
    }

    createPost(title, content) {
        const newPost = new Post(title, content, this)
        this.posts.push(newPost)
        return newPost
    }
}

module.exports = Author