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
            console.log(err, result)
            if(err){
                reject(err)
            }else{
                console.log(result)
                resolve(result)
            }
        })
    })
}

module.exports = {createPost, updatePost}