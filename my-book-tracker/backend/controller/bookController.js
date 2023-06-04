const Book = require('../models/Book')

exports.createBook = async (req, res, next) => {
    try {
        if (req.body) {
            const newBook = {
                author: req.body.author,
                title: req.body.title,
                isbn: req.body.isbn,
                pages: req.body.pages,
                type: req.body.type,
                description: req.body.description,
                image: "",
                user: req.user.id
            }

            const book = await Book.create(newBook)

            res.status(201).json({
                success: 'true',
                book
            })
        }
    } catch (error) {
        console.log(error)
    }
}