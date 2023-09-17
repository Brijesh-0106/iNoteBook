const express = require('express')
// router = localhost:5000/api/notes
const router = express.Router();
// TO USE USER FORMAT.
const Notes = require('../models/Notes');
// var fetchuser = require('../middleware/fetchuser');
var fetchuser = require("../middleware/fetchuser")
// FOR EXPRESS VALIDATOR.
const { body, validationResult } = require('express-validator');

//ROUTE 1 :- Fetch All Notes Of Varified User => GET = router/fetchallnotes :- LOGIN REQUIRED
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        let notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server se galti se INTERNAL Mistake ho gai!!")
    }
})

//ROUTE 2 :- Add Notes => POST = router/addnote :- LOGIN REQUIRED
router.post('/addnote', fetchuser,
    [
        // VALIDATIONS FOR NAME, EMAIL, PASSWORD.
        body('title', 'minimum 3 characters of title').isLength({ min: 3 }),
        body('description', 'minimum 3 characters of description').isLength({ min: 3 }),
    ], async (req, res) => {
        try {
            const { title, description, tag } = req.body
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const note = new Notes({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()
            res.json(savedNote)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Server se galti se INTERNAL Mistake ho gai!!")
        }
    })


//ROUTE 3 :- Update Notes => PUT(For Update) = router/updatenote/:id :- LOGIN REQUIRED
router.put('/updatenote/:id', fetchuser, async (req, res) => {//(:) is required.
    const { title, description, tag } = req.body
    try {
        const newnote = {}
        if (title) { newnote.title = title }
        if (description) { newnote.description = description }
        if (tag) { newnote.tag = tag }

        //find note by id.
        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not Found")
        }

        //It should be user's note(Checking with id)
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed")
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })
        res.json({ "Success": "Updated successfully", note: note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server se galti se INTERNAL Mistake ho gai!!")
    }
})


//ROUTE 4 :- Delete Notes => DELETE = router/deletenote/:id :- LOGIN REQUIRED
router.delete('/deletenote/:id', fetchuser, async (req, res) => {//(:) is required.
    try {
        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not Found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed")
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "seccess": "Deleted successfully", note: note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server se galti se INTERNAL Mistake ho gai!!")
    }
})


module.exports = router