const mongoose = require('mongoose')

//!creating schema 
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('User', userSchema)