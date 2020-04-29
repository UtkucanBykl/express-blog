const {Post} = require('../models/post')

const getPostController = (req, res) => {
    Post.find({publish: true}).exec().then(
        response => {
            if (response.length) {
                console.log(response.length)
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
    Post.findOne({id: req.params.id, publish: true}).then(
        response => {
            console.log(response)
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

module.exports = {
    getPostController,
    getPostByIDController,
}