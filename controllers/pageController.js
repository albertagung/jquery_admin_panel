const Page = require('../models/pageModel.js')

// Find all Page
const findAllPage = (req, res) => {
  Page.find().then((dataPage) => {
    res.status(200).send(dataPage)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
}

// Find Page by id
const findPageById = (req, res) => {
  console.log(req.params.idPage);
  Page.find(
    {
      _id: req.params.idPage
    }
  ).then((dataPage) => {
    res.status(200).send(dataPage)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
}

// Insert New Page
const insertNewPage = (req, res) => {
  let newPage = Page(
    {
      sectionName: req.body.sectionName,
      sectionTitle: req.body.sectionTitle,
      sectionContent: req.body.sectionContent,
      sectionPart: req.body.sectionPart,
      partTitle: req.body.partTitle
    }
  )
  newPage.save().then((dataPage) => {
    res.status(200).send(dataPage)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
}

// Update Page
const updatePage = (req, res) => {
  Page.findOneAndUpdate(
    {
      sectionName: req.params.sectionName,
      sectionPart: req.params.sectionPart
    },
    {
      sectionTitle: req.body.sectionTitle,
      sectionContent: req.body.sectionContent,
      partTitle: req.body.partTitle
    }
  ).then((dataPage) => {
    res.status(200).send(dataPage)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
}

// Delete Page by id
const removePage = (req, res) => {
  Page.findOneAndRemove(
    {
      _id: req.params.idPage
    }
  ).then((dataPage) => {
    res.status(200).send(dataPage)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
}

module.exports = {
  findAllPage,
  findPageById,
  insertNewPage,
  updatePage,
  removePage
}
