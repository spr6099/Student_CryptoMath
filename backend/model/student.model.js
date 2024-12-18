const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
  amount: { type: Number },
  status: { type: String, enum: ["pending", "paid"], default: "pending" },
  payemtDate: { type: Date },
  transactionId: { type: String },
  transactionMethod: { type: String },
});

const studentSchema = new mongoose.Schema({
  name: { type: String },
  profileimage: { type: String },
  email: { type: String },
  dob: { type: String },
  gender: { type: String },
  phone: { type: Number },
  password: { type: String },
  medical: [{ type: String }],
  educational: [{ type: String }],
  relation: { type: String },
  about: { type: String },
  adminstatus: {
    type: String,
    default: "pending",
    enum: ["approve", "pending"],
  },
  fees: feeSchema,
  games: {
    snake: { type: Boolean, default: false },
    guess: { type: Boolean, default: false },
    typing: { type: Boolean, default: false },
    fruit: { type: Boolean, default: false },
  },
  role: { type: String, default: "student" },
  address: {
    state: { type: String },
    pin: { type: Number },
    fullAddress: { type: String },
  },

  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "teachers" },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "parents" },
});

module.exports = mongoose.model("students", studentSchema);
