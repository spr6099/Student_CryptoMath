const express = require("express");
const { update, score, getScore } = require("../controller/student.controller");
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

router.post(
  "/update/:id",
  upload.fields([
    { name: "profileimage", maxCount: 1 },
    { name: "medical", maxCount: 5 },
    { name: "educational", maxCount: 5 },
  ]),
  update
);
router.post("/score", score);
router.get("/getscore/:id", getScore);

module.exports = router;
