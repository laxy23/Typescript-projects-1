const express = require('express')
const dotenv = require('dotenv')
dotenv.config() 
const cors = require('cors')
const path = require('path')
const cookieparser = require("cookie-parser");
const { connect } = require('./utils/connect.js')
const authRoutes = require('./routes/auth.js')
const bookRoutes = require('./routes/book.js')
const PORT = process.env.PORT_APP || "https://jade-lazy-beaver.cyclic.app";
const app = express()
const corsOptions = {
    origin: "https://librify.onrender.com",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieparser());

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/book', bookRoutes)

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

app.use("/static", express.static("public/images"));
app.use(express.static(path.join(__dirname, '../book-tracker/dist')))
app.get("*", (req, res) =>
  res.sendFile(__dirname, "../", "book-tracker", "dist", "index.html")
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  connect();
});
