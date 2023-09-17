const mongoose = require('mongoose');
const { Schema } = mongoose;

// defining schema.
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true//For unique email address
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
// 'user' is name of collection.
module.exports = mongoose.model('user', UserSchema);