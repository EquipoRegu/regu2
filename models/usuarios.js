const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    usrs: {
        type: String,
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('usuarios', schema)
