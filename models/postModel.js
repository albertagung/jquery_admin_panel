const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = Schema(
  {
    title: String,
    content: String,
    createdAt: Date,
    updatedAt: {
      type: Date,
      default: Date.now
    },
    author: {
      type: String,
      default: 'Default'
    }
  }
)

let Post = mongoose.model('Post', postSchema)
module.exports = Post
