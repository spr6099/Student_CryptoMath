const Parents = require("../model/parent.model");
const Student = require("../model/student.model");
const bcrypt = require("bcrypt");

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

    const data = await Student.findById(id).populate("teacher");
    return res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "error in getOne child", error: error.message });
  }
};
