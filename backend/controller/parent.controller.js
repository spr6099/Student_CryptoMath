const feedbackModel = require("../model/feedback.model");
const Parents = require("../model/parent.model");
const Student = require("../model/student.model");
const bcrypt = require("bcrypt");

// const crypto = require('crypto');
// const razorpay = require('razorpay');


// const instance = new razorpay({
//   key_id: 'rzp_test_4Ex6Tyjkp79GFy',
//   key_secret: 'lVGcQB0HSAttEhr7mq4AbM7Z',
// });

exports.addparentdetails = async (req, res) => {
  try {
    const { id, image } = req.body;

    const data = await Parents.findByIdAndUpdate(
      id,
      {
        ...req.body,
        address: req.body.address,
        image: req?.file?.filename,
      },
      { new: true }
    );
    // await Parents.save();
    return res
      .status(200)
      .json({ message: "profile updated succesfully", data });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "error in update profile", error: error.message });
  }
};

exports.addstudentdetails = async (req, res) => {
  try {
    const { password, email } = req.body;
    console.log(req.body);

    const existemail = await Student.findOne({ email });
    if (existemail) {
      return res.status(400).json({ message: "email already existed" });
    }

    //if password not give then password key not created
    let pswd;
    if (password && password !== "") {
      const salt = await bcrypt.genSalt(10);
      pswd = await bcrypt.hash(password, salt);
    }
    //if password not give then password key not created

    const studentData = {
      ...req.body,
      address: req.body?.address,
      password: pswd,
      profileimage: req.files.profileimage
        ? req.files.profileimage[0].filename
        : "",
      medical: req.files.medical
        ? req.files.medical.map((file) => file.filename)
        : [],
      educational: req.files.educational
        ? req.files.educational.map((file) => file.filename)
        : [],
    };

    const student = new Student(studentData);

    await student.save();
    return res
      .status(200)
      .json({ message: "Student added successfully", data: student });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error in add student", error: error.message });
  }
};

exports.getChildrens = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const data = await Student.find({ parent: id }).populate("teacher");
    return res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "error in getchildren", error: error.message });
  }
};

exports.getOneChild = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const data = await Student.findById(id)
      .populate("teacher")
      .populate("parent");
    return res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "error in getOne child", error: error.message });
  }
};

exports.addFeedback = async (req, res) => {
  try {
    await feedbackModel.create(req.body);
    return res.status(200).json({ message: "feedback submitted" });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "feedback submition failed", error: err.message });
  }
};

exports.GetFeedBack = async (req, res) => {
  try {
    const { studentId, teacherId } = req.body;
    const data = await feedbackModel
      .find({ studentId, teacherId })
      .sort({ updatedAt: -1 });
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "feedback submition failed", error: err.message });
  }
};






// exports.payment=(req, res) => {
//   const { payment_id, order_id, signature } = req.body;

//   const body = order_id + "|" + payment_id;
//   const generated_signature = crypto
//     .createHmac('sha256', instance.key_secret)
//     .update(body)
//     .digest('hex');

//   if (generated_signature === signature) {
//     res.status(200).send({ success: true });

//   } else {
//     res.status(400).send({ success: false });
//   }
// }
