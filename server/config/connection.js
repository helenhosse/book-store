require('dotenv').config();
const mongoose = require("mongoose");

// add the connection

module.exports = mongoose.connection;