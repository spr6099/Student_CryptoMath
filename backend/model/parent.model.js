const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  number: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  address: {
    state: { type: String },
    district: { type: String },
    pincode: { type: Number },
    post: { type: String },
    fullAddress: { type: String },
  },
  occupation: { type: String },
  relation: { type: String },
  role: {
    type: String,
    default: "parent",
    enum: ["admin", "teacher", "student", "parent"],
  },
});

module.exports = mongoose.model("parents", parentSchema);
