const mongoose = require("mongoose");

gameSchema = mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "students" },
    game: { type: String },
    score: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("gamescores", gameSchema);
