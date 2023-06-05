const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieparser = require("cookie-parser");
const { connect } = require('./utils/connect.js')
const authRoutes = require('./routes/auth.js')
const bookRoutes = require('./routes/book.js')
const PORT = process.env.PORT_APP || 5000
dotenv.config()
const app = express()
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieparser());

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/book', bookRoutes)

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