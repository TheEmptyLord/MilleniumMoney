const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        //minlength: 5,
        //maxlength: 50
    },
    email: {
        type: String,
        required: true,
        //minlength: 7,
        //maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        //minlength: 10,
        //maxlength: 256
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User