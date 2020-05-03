const { Post } = require('../models/post')

const createPost = (data) => {
    return new Promise((resolve, reject) => {
        const { title, content, categoryID } = data
        const post_instance = new Post({
            title,
            content,
            categoryID
        })
        post_instance.save((err) => {
            if(err){
                reject(err.errors)
            }
            resolve(post_instance)
        })
    })
}

module.exports = {createPost}