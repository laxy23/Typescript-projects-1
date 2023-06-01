const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, 'User must have a name']
    },
    email: {
        type: String,
        require: [true, 'User must have a email']
    },
    password: {
        type: String,
        require: [true, 'User must have a password']
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    books: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Books'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)