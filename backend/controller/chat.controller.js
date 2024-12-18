const Chat = require("../model/chat.model");
const Message = require("../model/message.model");

// https://github.com/ZainRk/MERN-SocialMedia-ZAINKEEPSCODE.git --from this respository- get reference for chat functions

exports.getOrCreateChat = async (req, res) => {
  try {
    const {senderId,receiverId,studentId}= req.body
    if(!senderId,!receiverId,!studentId){
      return res.status(404).json({ message: "some id missing for get or create chat" });
    }
    // Check if a chat already exists between the sender and receiver
    const chat = await Chat.findOne({
      members: { $all: [senderId, receiverId,studentId] },
    });

    // If chat exists, return the existing chat
    if (chat) {
      return res.status(200).json({ message: "Chat found", data: chat });
    }

    // If chat does not exist, create a new chat
    const newChat = new Chat({
      members: [senderId, receiverId,studentId],
    });
    const result = await newChat.save();

    // Return the newly created chat
    res.status(200).json({ message: "Chat created", data: result });
  } catch (error) {
    res.status(400).json({ message: "Error in getting or creating chat", error: error.message });
  }
};


exports.addMessage = async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;
    if(!chatId,!senderId,!text){
      return res.status(404).json({ message: "some id missing for create message" });
    }
    const message = new Message({
      chatId,
      senderId,
      text,
    });
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({message:"error in chat add message function",error:error.message});
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    if(!chatId){
      return res.status(404).json({ message: "chat id missing get message" });
    }
    const result = await Message.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({message:"error in chat get message function",error:error.message});
  }
};