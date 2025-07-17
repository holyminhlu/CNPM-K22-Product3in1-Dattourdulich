const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    passWord: {type: String, required: true},
    username: {type: String, required: false}, // Thêm trường username
    phone: {type: String, default: ''},
    address: {type: String, default: ''},
    gender: {type: String, default: ''}
},{
    timestamps: true,
    collection: 'UserCollection'
})

module.exports = mongoose.model('UserCollection', accountSchema);