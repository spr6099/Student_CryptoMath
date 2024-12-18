const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    chatId: {
        type: mongoose.Schema.Types.ObjectId,ref:"chats"    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("messages", MessageSchema);
