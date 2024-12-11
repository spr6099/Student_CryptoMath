const Teachers = require("../model/teacher.model");
const bcrypt = require("bcrypt");
const { FindByEmail } = require("./FindByEmail");

exports.addteacher = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await FindByEmail(email);
    if (user) {
      return res.status(400).json({ message: "email already existed" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newTeacher = new Teachers({
      ...req.body,
      password: hashedPassword,
    });
    await newTeacher.save();
    return res.status(200).json({ message: "teacher added succesfully" });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Name or email already exists" });
    }
    return res
      .status(400)
      .json({ message: "error in add teacher", error: error.message });
  }
};

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teachers.find();

    return res.status(200).json({ teachers });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "error in get all Teachers", error: err.message });
  }
};
