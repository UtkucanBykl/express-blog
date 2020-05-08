const { Comment } = require('../models/comment')
const { createComment, getCommentByPost } = require('../services/comment')


const getCommentByPostController = (req, res) => {
    const postID = req.post._id
    getCommentByPost(postID).then(
        response => {
            if(response){
                res.status(200).json(response)
            }else {
                res.status(404).json('kayit yok')
            }
        }
    ).catch(
        err => res.status(400).json(err)
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
    getCommentByPostController,
    createCommentByPost
}
