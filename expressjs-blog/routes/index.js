const express = require('express')
const indexController = require('../controllers/index')
const aboutController = require('../controllers/about')
const { getPostController, getPostByIDController } = require('../controllers/post')
const authControl = require('../middlewares/auth')

const router = express.Router()

router.get('/index', indexController)
router.get('/about', aboutController)
router.get('/posts', getPostController)
router.get('/posts/:id', getPostByIDController)

module.exports = router