// Image From DB Function
const imageFromDb = require('./imageFromDbController')

// GCLOUD

let Storage = require('@google-cloud/storage')
let storage = Storage({
	projectId: process.env.GCS_PROJECT_ID,
	keyFilename: process.env.GCS_KEY_FILE_JSON
})
let BUCKET_NAME = process.env.GCS_IMAGE_BUCKET_NAME
let imageBucket = storage.bucket(BUCKET_NAME)

getPublicUrl = (fileName) => {
	return `https://storage.googleapis.com/${BUCKET_NAME}/${fileName}`
}

sendUploadToGCS = (req, res, next) => {
  if (!req.file) {
    return next()
  }
  const gcsname = Date.now() + req.file.originalname
  const file = imageBucket.file(gcsname)

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  })

  stream.on('error', (err) => {
    req.file.cloudStorageError = err
    next(err)
  })

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    file.makePublic().then(() => {
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
      imageFromDb.insertNewImage(
        req.file.cloudStorageObject, 
        req.file.cloudStoragePublicUrl,
        req.body.imageForSection)
      .then(() => {
        console.log('done')
      })
    })
  })

  stream.end(req.file.buffer)
  res.status(200)
}

module.exports = {
	sendUploadToGCS
}
