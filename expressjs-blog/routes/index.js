const express = require('express')
const indexController = require('../controllers/index')
const aboutController = require('../controllers/about')
const { getPostController, getPostByIDController, createPostController, updatePostController } = require('../controllers/post')
const { getCommentByPostController, createCommentByPost } = require('../controllers/comment')
const authControl = require('../middlewares/auth')
const { commentValidate } = require('../middlewares/comment')

const router = express.Router()

router.get('/index', indexController)
router.get('/about', aboutController)
router.route('/posts').get(getPostController).post(authControl, createPostController)
router.route('/posts/:postID').get(getPostByIDController).patch(updatePostController)
router.route('/posts/:postID/comments').get(getCommentByPostController).post(commentValidate, createCommentByPost)

module.exports = router