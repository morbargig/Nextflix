const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
// mongoose.connect('mongodb://localhost/places',{useNewUrlParser : true})



const wishListSchema = new Schema({
    name: String,
    language : String,
    genres: [String],
    premiered: Date,
    rating: Number,
    mediumImg: String,
    originalImag: String,
    summary: String,
    runTime: Number,
    status: String,
    id: Number,
})


const  wishList = mongoose.model("wishList", wishListSchema)

module.exports = wishList
