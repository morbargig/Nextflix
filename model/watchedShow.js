const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
// mongoose.connect('mongodb://localhost/places',{useNewUrlParser : true})



const watchedShowSchema = new Schema({
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


const  watchedShow = mongoose.model("watchedShow", watchedShowSchema)

module.exports = watchedShow
