const express = require('express')
const { createBook, uploadPhoto, resizePhoto, getMyBooks, getBookDetail } = require('../controller/bookController.js')
const { verifyToken, verifyUser } = require('../utils/verifyToken.js')
const router = express.Router()

router.route('/').post(verifyToken, uploadPhoto, resizePhoto, createBook)
router.route('/:id').get(verifyUser, getMyBooks)
router.route('/bookDetail/:id').get(verifyToken, getBookDetail)

module.exports = router