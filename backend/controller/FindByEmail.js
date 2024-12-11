const Teacher = require("../model/teacher.model");

const Admins = require("../model/admin.model");
const Parents = require("../model/parent.model");

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
    user = await Teacher.findOne({ email });
    if (user) {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  FindByEmail,
};
