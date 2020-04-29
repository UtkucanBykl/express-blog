const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    publish: {
        type: Boolean,
        default: true
    }
})

module.exports = {
    Category: mongoose.model('Category', categorySchema),
    categorySchema
}