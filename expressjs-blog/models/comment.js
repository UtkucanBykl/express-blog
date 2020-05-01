const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        default: 'John Doe',
        
    },
    comment: {
        type: String,
        required: [true, 'You have to add comment on your comment'],
    },
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    publish: {
        type: Boolean,
        default: false
    }
})


module.exports = {
    Comment: mongoose.model('Comment', commentSchema),
    commentSchema
}