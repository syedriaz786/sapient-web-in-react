const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');

// ROUTE 1: Get all the Notes  using: GET "/api/auth/getuser". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    const notes = await Notes.find({ user: req.user.id })
    res.json(notes)
})


// ROUTE 2: Add a new Note using: POST "/api/auth/addnote". Login required
router.post('/addnote', fetchuser, async (req, res) => {

    const notes = await Notes.find({ user: req.user.id })   // video 52 minute 8:05
    res.json(notes)
})

module.exports = router