const mongoose = require("mongoose")
const Schema = mongoose.Schema


const Admin = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        unique: true
    }
})


module.exports = mongoose.model('Admin', Admin)
