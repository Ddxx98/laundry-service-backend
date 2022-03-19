const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    name: { type: String },
    email: { type: String , unique:true},
    phone: { type: Number , unique:true},
    state: { type: String },
    district: { type: String },
    address: { type: String },
    pincode: { type: String },
    password: {type: String, required:true}
})

const User = mongoose.model('User',userSchema)

module.exports = User;