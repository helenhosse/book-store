require('dotenv').config();
const mongoose = require("mongoose");

// add the connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://71.196.133.50/32",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;