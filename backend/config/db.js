const mongoose = require("mongoose");
const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected!"));

  mongoose.connection.on("error", function (err) {
    console.log("The error is: ");
  });
};

module.exports = connectDB;


// const mongoose = require("mongoose");
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGOURI);
//     console.log("Database connected");
//   } catch (err) {
//     console.log("can not connect to the database", err);
//   }
// };

// module.exports = connectDB;
