const express = require("express");
const { updateProfile, getStudents } = require("../controller/teacher.controller");
const multer = require("multer");
const router = express.Router();

// ----multer---------------------

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/profile/:id",upload.single('file') ,updateProfile);
router.get("/students/:id" ,getStudents);

module.exports = router;