const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = Schema(
  {
  	imageName: {type: String, default: 'image_name'},
  	imageUrl: {type: String, default: 'image_url'},
  	imageForSection: {type: String, default: 'image_for_section'}
  }
)

let Image = mongoose.model('Image', imageSchema)
module.exports = Image
