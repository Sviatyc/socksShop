const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Socks = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        is36: {type: Boolean},
        is37: {type: Boolean},
        is38: {type: Boolean},
        is39: {type: Boolean},
        is40: {type: Boolean},
        is41: {type: Boolean},
        is42: {type: Boolean},
        is43: {type: Boolean},
        is44: {type: Boolean}
    },
    currency: {
        EUR: {type: Boolean},
        USD: {type: Boolean},
        UAN: {type: Boolean}
    }

})


module.exports = mongoose.model('Socks', Socks)