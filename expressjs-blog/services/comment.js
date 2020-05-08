const { Comment } = require('../models/comment')
const mongoose = require('mongoose');

const createComment = (data) => {
    return new Promise((resolve, reject) => {
        const { name, postID, comment } = data
        const comment_instance = new Comment({
            name,
            postID,
            comment
        })
        comment_instance.save((err) => {
            if(err) {
                reject(err.errors)
            }
            resolve(comment_instance)
        })
    })
}

const getCommentByPost = (postID) => {
    const objectID = new mongoose.Types.ObjectId(postID)
    return new Promise((reolve, reject) => {
        Comment.find({postID: objectID, publish: true}).then(
            response => {
                console.log(response);
                resolve(response)
            }
        ).catch(
            err => reject(err)
        )

    })
}


module.exports = {
    createComment,
    getCommentByPost
}