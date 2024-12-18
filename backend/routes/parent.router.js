const express = require("express");
const {
  addparentdetails,
  addstudentdetails,
  getChildrens,
  getOneChild,
  updatestudentdetails,
  addFeedback,
  GetFeedBack,
  payment
} = require("../controller/parent.controller");
const router = express.Router();

const multer = require("multer");

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

router.post("/addparentdetails", upload.single("proimage"), addparentdetails);
router.post(
  "/addstudentdetails",
  upload.fields([
    { name: "profileimage", maxCount: 1 },
    { name: "medical", maxCount: 5 },
    { name: "educational", maxCount: 5 },
  ]),
  addstudentdetails
);

router.get("/getchildrens/:id", getChildrens);
router.get("/getonechild/:id", getOneChild);
router.post("/addfeedback", addFeedback);
router.post("/getfeedback", GetFeedBack);
// router.post('/verify-payment',payment);

module.exports = router;
