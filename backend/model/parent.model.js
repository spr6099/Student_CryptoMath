const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  number: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  gender: { type: String }, 
  dob: { type: String }, 
  address: {
    state: { type: String },
    pin: { type: Number },
    fullAddress: { type: String },
  },
  occupation: { type: String },
  income: { type: Number },
  // relation: { type: String },
  role: {
    type: String,
    default: "parent",
    // enum: ["admin", "teacher", "student", "parent"],
  },
});

module.exports = mongoose.model("parents", parentSchema);
