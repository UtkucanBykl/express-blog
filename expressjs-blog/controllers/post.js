const {Post} = require('../models/post')
const {createPost, updatePost} = require('../services/post')

const getPostController = (req, res) => {
    Post.find({publish: true}).then(
        response => {
            if (response.length) {
                res.status(200).json(response)
            }
            else {
                res.status(200).json('kayit yok')
            }
        }
    ).catch(
        err => {
            res.status(400).json(err)
        }
    )
}

const getPostByIDController = (req, res) => {
    res.status(200).json(req.post)
}

const createPostController = (req, res) => {
    createPost(req.body).then(
        response => res.status(201).json(response)
    ).catch(
        err => res.status(400).json(err)
    )
}

const updatePostController = (req, res) => {
    updatePost(req.params.postID, req.body).then(
        response => res.status(201).json(response)
    ).catch(
        err => res.status(400).json(err)
    )
}

module.exports = {
    getPostController,
    getPostByIDController,
    createPostController,
    updatePostController
}