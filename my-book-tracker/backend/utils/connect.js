const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log('Connected to mongoDB')
    } catch (error) {
        throw error
    }
}

module.exports = { connect };
