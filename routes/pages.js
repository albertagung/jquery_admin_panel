const express = require('express')
const router = express.Router()
const pageController = require('../controllers/pageController.js')

// Find all posts
router.get('/', pageController.findAllPage)

// Find page by id
router.get('/:idPage', pageController.findPageById)

// Create new page
router.post('/', pageController.insertNewPage)

// Update page by Page Name and Page Part
router.put('/:sectionName/:sectionPart', pageController.updatePage)

// Delete page by id
router.delete('/:idPage', pageController.removePage)

module.exports = router
