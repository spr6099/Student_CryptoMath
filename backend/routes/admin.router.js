const express = require("express");
const {
  addteacher,
  getAllTeachers,
} = require("../controller/admin.controller");
const router = express.Router();

// const multer = require("multer");
//----multer---------------------
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
// router.post("/addteacher", upload.single("image"), addteacher);


router.post("/addteacher",  addteacher);
router.get("/getallteacher", getAllTeachers);

module.exports = router;
