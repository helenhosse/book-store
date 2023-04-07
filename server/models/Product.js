const mongoose = require('mongoose');
const User = require('./Product');
const { Schema } = mongoose;


const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    firstSentence: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 1
    },
    quantity: {
        type: Number,
        min: 1,
    },
    year: {
        type: Number,
        required: true,
    }
    
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;