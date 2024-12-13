const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true ,unique: true},
  phone: { type: Number, required: true },
  joindate: { type: String },
  password: { type: String, required: true },
  image: { type: String },
  gender: { type: String },
  specializedIn : { type: String },
  dob: { type: String },
  address: {
    state: { type: String },
    district: { type: String },
    pin: { type: Number },
    fullAddress: { type: String },
  },
  role: {
    type: String,
    default: "teacher",
  },
});

module.exports = mongoose.model("teachers", teacherSchema);
