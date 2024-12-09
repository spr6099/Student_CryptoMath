const Admins = require("../model/admin.model");
const Parents = require("../model/parent.model");
const bcrypt = require("bcrypt");

async function FindByEmail(email) {
  try {
    let user = await Parents.findOne({ email });
    if (user) {
      return user;
    }
    user = await Admins.findOne({ email });
    if (user) {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await FindByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   return res.status(404).json({ message: "password is incorrect" });
    // }
    if (password !== user.password) {
      return res.status(404).json({ message: "password is incorrect" });
    }
    return res.status(200).json({ message: "Login success", data: user });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Login error", error: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;

    const existingUser = await Parents.findOne({
      $or: [{ email }, { name }, { number }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "name,number or email are already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // await Parents.create({ name, email, number, password: hashedPassword });
    await Parents.create({ name, email, number, password });
    return res.status(200).json({ message: "register success" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "register error", error: error.message });
  }
};
