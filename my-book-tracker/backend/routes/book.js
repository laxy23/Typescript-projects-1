const express = require('express')
const { createBook } = require('../controller/bookController.js')
const router = express.Router()

router.route('/').post(createBook)

module.exports = router