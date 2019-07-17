const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
// mongoose.connect('mongodb://localhost/places',{useNewUrlParser : true})



const showDBSchema = new Schema({
    name: String,
    language : String,
    genres: Array,
    premiered: Date,
    rating: Number,
    mediumImg: String,
    originalImag: String,
    summary: String,
    runTime: Number,
    status: String,
    id: Number,
})


const  showDB = mongoose.model("showDB", showDBSchema)

module.exports = showDB
