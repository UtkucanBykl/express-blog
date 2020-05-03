const {Post} = require('../models/post')
const {createPost} = require('../services/post')

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
    Post.findOne({id: req.params.postID, publish: true}).then(
        response => {
            if (response) {
                console.log('response')
                res.status(200).json(response)
            }
            else{
                res.json('Kayit yok')
            }
        }
    ).catch(
        err => res.status(400).json(err)
    )
}

const createPostController = (req, res) => {
    createPost(req.body).then(
        response => res.status(201).json(response)
    ).catch(
        err => res.status(400).json(err)
    )
}

module.exports = {
    getPostController,
    getPostByIDController,
    createPostController
}