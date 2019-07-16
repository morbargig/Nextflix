const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
// mongoose.connect('mongodb://localhost/places',{useNewUrlParser : true})



const ShowSchema = new Schema({
    name: String,
    language : String,
    genres: String,
    premiered: Date,
    rating: Number,
    mediumImg: String,
    originalImag: String,
    summary: String,
    runTime: Number,
    status: String,
    id: Number
})


const  Show = mongoose.model("Show", ShowSchema)

module.exports = Show