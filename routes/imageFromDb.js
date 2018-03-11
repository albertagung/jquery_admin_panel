const express = require('express')
const router = express.Router()
const imageFromDbController = require('../controllers/imageFromDbController')

// Get all images from DB
router.get('/', imageFromDbController.getAllImages)

module.exports = router