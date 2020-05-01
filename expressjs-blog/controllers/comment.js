const { Comment } = require('../models/comment')
const { createComment } = require('../services/comment')

const getCommentByPost = (req, res) => {
    const postID = req.params.id
    Comment.find({postID: postID, publish: true}).then(
        response => {
            if(response){
                res.status(200).json(response)
            } else {
                res.status(202).json('Kayit yok')
            }
        }
    ).catch(
        err => res.status(404).json(err)
    )
}

const createCommentByPost = (req, res) => {
    const data = {...req.params, ...req.body} 
    createComment(data).then(
        response => res.status(201).json(response)
    ).catch(
        err => res.status(400).json(err)
    )
}



module.exports = {
    getCommentByPost,
    createCommentByPost
}
