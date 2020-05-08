const router = require('./index');
const { Post } = require('../models/post')
const mongoose = require('mongoose');

router.param('postID', (req, res, next, postID) => {
    objectID = new mongoose.Types.ObjectId(postID)
    Post.findOne({_id: objectID, publish: true}).then(
        response => {
            if(response){
                req.post = response
                next()
            }
            res.status(404).json('not found')
        }
    ).catch(
        err => {
            res.sendStatus(404)
        }
    )
})

module.exports = router