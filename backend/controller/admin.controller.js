const Teachers = require("../model/teacher.model");
const bcrypt = require("bcrypt");
const { FindByEmail } = require("./FindByEmail");
const Parents = require("../model/parent.model");
const Students = require("../model/student.model");

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail", // or another service
//   auth: {
//     user: "sandeep.pr3@gmail.com",
//     pass: "ierfdnetyofxiyna",
//   },
// });
// chrome-> app password-> set name and passkey
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

    // const mailOptions = {
    //   from: "abc@gmail.com",
    //   to: email,
    //   subject: "login",
    //   html: `
    //   <h4>you are registerd cryptomath as teacher. you can login this email and password</h4>
    //   <p>userName : ${email}</p>
    //   <p>password:${password}</p>
    //   `,
    // };
    // const x = await transporter.sendMail(mailOptions);
    // console.log("x", x);

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
exports.getAllParents = async (req, res) => {
  try {
    const parents = await Parents.find();

    return res.status(200).json({ parents });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "error in get all parents", error: err.message });
  }
};
exports.getOneStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Students.findById(id);

    return res.status(200).json({ data: student });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "error in get  student", error: err.message });
  }
};
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Students.find();

    return res.status(200).json({ students });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "error in get all students", error: err.message });
  }
};
