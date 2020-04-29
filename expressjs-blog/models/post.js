const mongoose = require('mongoose');
const { categorySchema } = require('./category')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    date: Date,
    publish: {
        type: Boolean,
        default: false
    },
    category: [categorySchema],
})

module.exports = {
    Post: mongoose.model('Post', postSchema),
    postSchema
}