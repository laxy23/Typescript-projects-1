const express = require('express')
const { createBook, uploadPhoto, resizePhoto } = require('../controller/bookController.js')
const { verifyToken } = require('../utils/verifyToken.js')
const router = express.Router()

router.route('/').post(verifyToken, uploadPhoto, resizePhoto, createBook)

module.exports = router