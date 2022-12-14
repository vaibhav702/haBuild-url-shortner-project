const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({

    urlCode: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxLength:30
    },
    longUrl: {
        type: String,
        required: [true, "url must be provided"],
        trim: true
    },
    shortUrl: {
        type: String,
        unique: true,
        required: true,
        

    }


}, { timestamps: true })

module.exports = mongoose.model("URL", urlSchema)