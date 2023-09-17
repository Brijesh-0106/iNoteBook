const mongoose = require('mongoose');
const { Schema } = mongoose;

// defining schema.
const NotesSchema = new Schema({
    user: {
        // To connect notes to user.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'//As a foreign key.
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
});
// 'notes' is name of collection.
module.exports = mongoose.model('notes', NotesSchema);