const express = require('express')
const app = express()
// const port = process.env.PORT
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
const request = require("request")
const mongoose = require('mongoose')
const api = require('./root/api')
app.use("/", api)



port = 3030
mongoose.connect('mongodb://localhost/Shows', { useNewUrlParser: true }).then(() => {
    app.listen(port, () => console.log(`Running server on port ${port}`))
})
