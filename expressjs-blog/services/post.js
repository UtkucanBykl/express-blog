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

const updatePost = (postID, data) => {
    return new Promise((resolve, reject) => {
        Post.findByIdAndUpdate(postID, {...data}, (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}

module.exports = {createPost, updatePost}