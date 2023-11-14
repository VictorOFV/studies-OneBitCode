class Comment {
    constructor(name, comment){
        this.name = name
        this.comment = comment
        this.createdAt = new Date()
    }
}

module.exports = Comment