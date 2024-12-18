const express = require("express");
const { getOrCreateChat ,addMessage,getMessages} = require("../controller/chat.controller");
const router = express.Router();

router.post("/get_or_create", getOrCreateChat);
router.post("/new_message", addMessage);
router.get("/get_messages/:chatId", getMessages);

module.exports = router;
