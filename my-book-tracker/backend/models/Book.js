const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    author: {
        type: String,
        require: [true, 'Book must have an author']
    },
    title: {
        type: String,
        require: [true, 'Book must have a title']
    },
    isbn: {
        type: Number,
        require: [true, 'Book must have a number']
    },
    pages: {
        type: Number,
        require: [true, 'Book must have a pages']
    },
    type: {
        type: Boolean,
        require: [true, 'Book must have a type']
    },
    description: {
        type: String,
        require: [true, 'Book must have a description']
    },
    image: {
        type: String,
        requrie: [true, "Book must have an image"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)