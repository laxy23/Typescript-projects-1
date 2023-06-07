const Book = require('../models/Book')
const multer = require("multer");
const sharp = require('sharp');
const { createError } = require('../utils/error')
const multerStorage = multer.memoryStorage();

const upload = multer({
    storage: multerStorage,
});

exports.uploadPhoto = upload.single("image");

exports.resizePhoto = (req, res, next) => {
    if (!req.file) return next();

    console.log(req.file)

    const imgName = req.file.originalname.split(".")[0];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    req.file.filename = imgName + "-" + `${uniqueSuffix}.jpeg`;

    sharp(req.file.buffer)
        .resize(500, 500, { withoutEnlargement: true })
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/${req.file.filename}`);

    next();
};


exports.createBook = async (req, res, next) => {
    try {
        let photo;
        console.log(req.file)
        if (req.file) photo = req.file.filename

        console.log(photo)
        if (req.body) {
            const newBook = {
                author: req.body.author,
                title: req.body.title,
                isbn: req.body.isbn,
                pages: req.body.pages,
                type: req.body.type,
                description: req.body.description,
                image: photo,
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

exports.getMyBooks = async (req, res, next) => {
    try {
        const books = await Book.find({
            user: req.user.id
        })

        res.status(200).json({
            success: 'true',
            results: books.length,
            books
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getBookDetail = async (req, res, next) => {
    try {
        const id = req.params.id
        const book = await Book.findById(id)
        const userId = book.user.toString()
        if (userId === req.user.id) {
            res.status(200).json({
                success: 'true',
                book
            })
        } else {
            return next(createError(404, "You are not authenticated!"));
        }

    } catch (error) {
        console.log(error)
    }
}