const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const Order = require('./Order') - will want to add this file if we are having an order page

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

module.exports = User;