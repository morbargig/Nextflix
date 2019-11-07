const express = require('express')
const app = express()
// const port = process.env.PORT
const api = require('./rout/api')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const request = require("request")
require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use("/", api)



const port = process.env.PORT || 3030
// app.listen(process.env.PORT || PORT);

// mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/tvShow');

const DB = process.env.MONGODB_URI || "mongodb://localhost/tvShow"
 
mongoose.connect( DB, { useNewUrlParser: true }).then(() => {
    app.listen(port, () => console.log(`Running server on port ${port}`))
})
