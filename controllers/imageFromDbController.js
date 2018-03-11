const Image = require('../models/imageModel')

// Get all images
const getAllImages = (req, res) => {
	Image.find().then((dataImages) => {
		res.status(200).send(dataImages)
	})
	.catch((err) => {
		console.log(err)
		res.status(500).send(err)
	})
}

// Insert new image from gcs
const insertNewImage = (imageName, imageUrl, imageForSection) => {
	return new Promise ((resolve, reject) => {
		let newImage = Image({
			imageName: imageName,
			imageUrl: imageUrl,
			imageForSection: imageForSection
		})
		newImage.save().then((dataImage) => {
			resolve(dataImage)
		})
		.catch((err) => {
			reject(err)
		})
	})
}

// Delete image from db
const removeImage = (imageName) => {
	return new Promise ((resolve, rejet) => {
		Image.findOneAndRemove({
			imageName: imageName
		})
		.then((dataImage) => {
			resolve(dataImage)
		})
		.catch((err) => {
			reject(err)
		})
	})
}

module.exports = {
	getAllImages,
	insertNewImage,
	removeImage
}