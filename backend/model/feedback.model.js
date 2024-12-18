const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "students" },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "teachers" },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedbacks", feedbackSchema);
