const mongoose = require('mongoose');
const { Schema } = mongoose

const orderSchema = new Schema({
    user: {type: mongoose.Types.ObjectId ,ref:'User'},
    product: {type: [{type: Map, of: String}]}
})

const Order = mongoose.model('Order',orderSchema)

module.exports = Order;