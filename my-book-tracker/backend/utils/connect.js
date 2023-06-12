const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://laxy23:TzwuBpPk7R2fIZ5B@cluster0.tdowxif.mongodb.net/")
        console.log('Connected to mongoDB')
    } catch (error) {
        throw error
    }
}

module.exports = { connect };
