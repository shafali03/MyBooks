const express = require('express')
const router = express.Router()
const Book = require('../models/book')

// All Books route
router.get('/', async (req, res) => {
  res.send('All Books')
})

// New Books Route
router.get('/new', (req, res) => {
  res.send('New Book')
})

// Create Books Route
router.post('/', async (req, res) => {
  res.send('Create Book')
})

module.exports = router
