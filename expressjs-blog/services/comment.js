const { Comment } = require('../models/comment')

const createComment = (data) => {
    return new Promise((resolve, reject) => {
        const { name, postID, comment } = data
        console.log(data)
        const comment_instance = new Comment({
            name,
            postID,
            comment
        })
        comment_instance.save((err) => {
            if(err.errors) {
                reject(err.errors)
            }
            resolve(comment_instance)
        })
    })
}

module.exports = {
    createComment
}