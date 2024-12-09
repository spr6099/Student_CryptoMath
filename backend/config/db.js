const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Database connected");
  } catch (err) {
    console.log("can not connect to the database", err);
  }
};

module.exports = connectDB;
