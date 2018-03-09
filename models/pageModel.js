const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pageSchema = Schema(
  {
    sectionName: {type: String, default: 'section_name'},
    sectionTitle: {type: String, default: 'section_name'},
    sectionContent: {type: String, default: 'section_content'},
    sectionPart: {type: String, default: 'section_part'},
    partTitle: {type: String, default: 'part_title'}
  }
)

let Page = mongoose.model('Page', pageSchema)
module.exports = Page
