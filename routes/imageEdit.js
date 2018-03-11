const express = require('express')
const router = express.Router()
const imageEditController = require('../controllers/imageEditController')

// Multer
let Multer  = require('multer')
let multer = Multer({
	storage: Multer.MemoryStorage
})

router.post('/', multer.single('file'), imageEditController.sendUploadToGCS)

module.exports = router