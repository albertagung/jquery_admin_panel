const express = require('express')
const router = express.Router()
const imageUploadController = require('../controllers/imageUploadController.js')

// Multer
let Multer  = require('multer')
let multer = Multer({
	storage: Multer.MemoryStorage
})

router.post('/', multer.single('file'), imageUploadController.sendUploadToGCS)

module.exports = router