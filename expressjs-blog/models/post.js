const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        required: [true, 'zorunlu'],
        type: String
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    publish: {
        type: Boolean,
        default: false
    },
    categoryID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'd']
        }
    ],
})

module.exports = {
    Post: mongoose.model('Post', postSchema),
    postSchema
}