const express = require('express')
const dotenv = require('dotenv')
const { connect } = require('./utils/connect.js')
const authRoutes = require('./routes/auth.js')
const PORT = process.env.PORT_APP || 5000
dotenv.config()
const app = express()

app.use(express.json());

app.use('/api/v1/auth', authRoutes)

connect()

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Something went wrong!'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})