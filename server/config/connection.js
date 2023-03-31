require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}
// add the connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://71.196.133.50/32",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = connectDB