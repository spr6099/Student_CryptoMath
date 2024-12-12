const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
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
  //   fee: { type: String, default: "pending", enum: ["pending", "paid"] },
  fees: [feeSchema],
  address: {
    state: { type: String },
    pin: { type: Number },
    fullAddress: { type: String },
  },
 
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "teachers" },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "parents" },
});

module.exports = mongoose.model("students", studentSchema);
